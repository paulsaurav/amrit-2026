import React, { useEffect, useMemo, useState } from "react";

/** Helper: Contentful fetch + asset resolution */
async function fetchNotices() {
  const space = "j7dpw7o71s1p";
  const token = "w3ny8pL3PkOOaOI8jfxtNActyRNudriMrst88fRsCr8";
  const env = "master";
  const ctype = "notice";

  const url = `https://cdn.contentful.com/spaces/${space}/environments/${env}/entries?content_type=${ctype}&include=2&order=-sys.createdAt`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Contentful error: ${res.status}`);
  const data = await res.json();

  // Build assets map
  const assets = new Map();
  (data.includes?.Asset || []).forEach((a) => assets.set(a.sys.id, a));

  // Normalize entries
  const notices = (data.items || []).map((item) => {
    const fRef = item.fields?.file?.sys?.id || item.fields?.file?.sys?.id;
    const asset =
      fRef && (data.includes?.Asset || []).find((a) => a.sys.id === fRef);

    // Some people store media directly in a field called 'asset' or 'file'
    const assetId =
      item.fields?.asset?.sys?.id ||
      item.fields?.file?.sys?.id ||
      item.fields?.document?.sys?.id;
    const resolved = asset || (assetId ? assets.get(assetId) : null);

    let url = resolved?.fields?.file?.url;
    if (url && url.startsWith("//")) url = "https:" + url;
    const contentType = resolved?.fields?.file?.contentType || "";
    const filename = resolved?.fields?.file?.fileName || "notice";

    return {
      id: item.sys.id,
      title: item.fields?.title || "Untitled Notice",
      subtitle: item.fields?.subtitle || "Click to view",
      url,
      contentType,
      filename,
    };
  });

  return notices;
}

/** Preview renderer for different mime types */
function Preview({ url, contentType }) {
  if (!url) {
    return (
      <div className="p-6 text-center text-black/70">
        No preview available for this notice.
      </div>
    );
  }

  // Images
  if (contentType.startsWith("image/")) {
    return (
      <div className="max-h-[70vh] overflow-auto p-4">
        <img src={url} alt="Notice" className="mx-auto rounded-lg" />
      </div>
    );
  }

  // PDF
  if (contentType === "application/pdf") {
    return (
      <iframe
        title="Notice PDF"
        src={`${url}#toolbar=1&zoom=page-fit`}
        className="w-full h-[70vh]"
      />
    );
  }

  // DOC / DOCX via Google Docs Viewer (works if public URL)
  const docTypes = [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (docTypes.includes(contentType)) {
    const gview = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(
      url
    )}`;
    return <iframe title="Notice Document" src={gview} className="w-full h-[70vh]" />;
  }

  // Fallback: try iframe; if blocked, advise download
  return (
    <div className="p-6">
      <div className="mb-3 text-black/70">
        Preview not available for this file type (<code>{contentType}</code>).
      </div>
      <iframe title="Notice" src={url} className="w-full h-[60vh]" />
    </div>
  );
}

function NoticeModal({ open, onClose, notice }) {
  return (
    <dialog open={open} className="modal">
      {/* Added bg-black text-white */}
      <div className="modal-box max-w-5xl bg-black text-white">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-lg">{notice?.title}</h3>
          <button onClick={onClose} className="btn btn-ghost btn-sm text-white">✕</button>
        </div>

        <div className="mt-4">
          <Preview url={notice?.url} contentType={notice?.contentType} />
        </div>

        <div className="modal-action">
          {notice?.url && (
            <a href={notice.url} download={notice.filename}>
              <button className="btn btn-primary">Download</button>
            </a>
          )}
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={onClose}>
        <button>close</button>
      </form>
    </dialog>
  );
}

/** The panel styled like your second screenshot */
export default function NoticesPanel() {
  const [notices, setNotices] = useState(null);
  const [error, setError] = useState("");
  const [active, setActive] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchNotices();
        if (mounted) setNotices(data);
      } catch (e) {
        setError(e.message || "Failed to load notices");
      }
    })();
    return () => { mounted = false; };
  }, []);

  const empty = useMemo(() => (Array.isArray(notices) && notices.length === 0), [notices]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mt-2 text-gray-900">NOTICES</h2>

      {/* Card */}
      <div className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden">
        {/* Blue header bar */}
        <div className="bg-[#1d4ed8] text-white px-5 py-3 font-semibold">
          Latest Announcements
        </div>

        {/* Body */}
        <div className="p-2">
          {/* Loading / error / empty states */}
          {!notices && !error && (
            <div className="p-4">
              <div className="skeleton h-4 w-2/3 mb-2"></div>
              <div className="skeleton h-4 w-1/2 mb-2"></div>
              <div className="skeleton h-4 w-2/5"></div>
            </div>
          )}
          {error && (
            <div className="p-4 text-red-600">Failed to load: {error}</div>
          )}
          {notices && empty && (
            <div className="p-4 text-black/70">No announcements yet.</div>
          )}

          {/* List */}
          <ul className="divide-y divide-black/5">
            {notices?.map((n) => (
              <li key={n.id}>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-black/5 flex items-start gap-3"
                  onClick={() => setActive(n)}
                >
                  {/* doc icon */}
                  <span className="mt-1 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z"/><path d="M14 2v6h6"/></svg>
                  </span>
                  <div className="flex-1">
                    <div className="font-medium">{n.title}</div>
                    <div className="text-sm text-black/60">Click to view</div>
                  </div>
                  <span className="text-black/40 mt-1">
                    {/* chevron */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal */}
      <NoticeModal
        open={!!active}
        onClose={() => setActive(null)}
        notice={active}
      />
    </div>
  );
}
