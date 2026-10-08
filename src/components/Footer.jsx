import React from "react";
import { Link } from "react-router-dom";

const archiveLinks = [
  { label: "AMRIT 2025", href: "https://amrit2025.amritconferences.in/" },
  { label: "AMRIT 2024", href: "https://amrit2024.amritconferences.in/" },
  { label: "AMRIT 2023", href: "https://amrit2023.amritconferences.in/" },
];

const departmentLinks = [
  { label: "About", href: "http://www.aus.ac.in/computer-science-department/" },
  {
    label: "Gallery",
    href: "http://www.aus.ac.in/computer-science-department/picture-gallery/",
  },
  {
    label: "Contact",
    href: "http://www.aus.ac.in/computer-science-department/contact-us/",
  },
];

// Woven border strip modelled on the red-and-white Assamese gamosa.
const GamosaBand = () => (
  <svg
    className="block w-full h-[18px]"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern
        id="gamosa"
        width="24"
        height="18"
        patternUnits="userSpaceOnUse"
      >
        <rect width="24" height="18" fill="#f4efe6" />
        <rect y="0" width="24" height="2" fill="#b5172b" />
        <rect y="16" width="24" height="2" fill="#b5172b" />
        <path d="M12 4 L17 9 L12 14 L7 9 Z" fill="#b5172b" />
        <path d="M12 7 L14 9 L12 11 L10 9 Z" fill="#f4efe6" />
        <rect x="0" y="8" width="3" height="2" fill="#b5172b" />
        <rect x="21" y="8" width="3" height="2" fill="#b5172b" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#gamosa)" />
  </svg>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-white"
    >
      <span className="h-px w-0 bg-[#e8a33d] transition-all duration-200 group-hover:w-3" />
      {children}
    </a>
  </li>
);

const ColumnHeading = ({ children }) => (
  <h6 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white mb-4 pb-2 border-b border-white/15">
    {children}
  </h6>
);

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#082c56] text-white">
      <GamosaBand />

      {/* Graph-paper grid, fading out towards the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 top-[18px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 30%, transparent 95%)",
        }}
      />

      <div className="relative max-w-[1175px] mx-auto px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Identity */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              {/* Logo is white line art on transparent, so it sits directly on the navy */}
              <img
                src="/amrit-logo.png"
                alt="AMRIT 2026 Logo"
                width={84}
                height={84}
                className="shrink-0"
              />
              <div>
                <p className="text-2xl font-extrabold tracking-tight leading-none">
                  AMRIT-2026
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white mt-1.5">
                  4th International Conference
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white max-w-md">
              Advanced Computing, Machine Learning, Robotics and Internet
              Technologies.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-6 max-w-md text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">
                  Dates
                </dt>
                <dd className="mt-1 font-semibold">23–24 Dec 2026</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">
                  Mode
                </dt>
                <dd className="mt-1 font-semibold">Hybrid · Assam University, Silchar</dd>
              </div>
            </dl>

            <Link
              to="/call-for-paper"
              className="mt-6 inline-flex items-center gap-3 bg-[#e8a33d] text-[#082c56] px-5 py-2.5 text-sm font-bold hover:bg-white transition-colors"
            >
              Call for Papers
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Links + address */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
            <nav>
              <ColumnHeading>Archive</ColumnHeading>
              <ul className="space-y-2.5">
                {archiveLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </nav>

            <nav>
              <ColumnHeading>Department</ColumnHeading>
              <ul className="space-y-2.5">
                {departmentLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </nav>

            <div>
              <ColumnHeading>Address</ColumnHeading>
              <address className="not-italic leading-relaxed text-white">
                Department of Computer Science
                <br />
                Assam University
                <br />
                Silchar, Assam, India
                <br />
                <span className="font-mono text-white">PIN 788011</span>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized outlined year, cropped by the footer edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none relative max-w-[1175px] mx-auto px-4 -mb-[0.32em] text-[22vw] lg:text-[260px] font-black leading-none tracking-tighter text-transparent"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.14)" }}
      >
        2026
      </div>

      <div className="relative border-t border-white/15 bg-[#061f3d]">
        <div className="max-w-[1175px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white">
          <p>
            © {new Date().getFullYear()} AMRIT · Designed and developed by
            Saurav Paul, Research Scholar, Dept. of CS, AUS
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="font-mono uppercase tracking-[0.18em] text-white hover:text-[#e8a33d] transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
