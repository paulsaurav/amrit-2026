import React from "react";
import { useNavigate } from "react-router-dom";

const items = [
  " Paper submission is open",
  " Paper submission closes Dec 10, 2026",
  " Registration closes Dec 20, 2026",
  " Conference: Dec 24–26, 2026 (25th Excluded) (Assam University, Silchar)",
];

export default function Marquee() {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full bg-blue-600 text-white h-10 overflow-hidden cursor-pointer"
      onClick={() => navigate("/registration")}
    >
      {/* Scroll container */}
      <div className="marquee flex items-center h-full whitespace-nowrap">
        <MarqueeRow items={items} />
        <MarqueeRow items={items} />
      </div>
    </div>
  );
}

function MarqueeRow({ items }) {
  return (
    <ul className="flex items-center gap-12 px-6 shrink-0 min-w-max">
      {items.map((t, i) => (
        <li key={i} className="font-semibold">
          {t}
        </li>
      ))}
    </ul>
  );
}