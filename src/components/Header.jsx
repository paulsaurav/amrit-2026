import { useEffect, useState } from "react";
import logo from "/aus-logo.png";
import amrit from "/amrits.png";
import { Link, NavLink, useLocation } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/call-for-paper", label: "Call For Paper" },
  { to: "/committee", label: "Committee" },
  { to: "/registration", label: "Registration" },
  { to: "/schedules", label: "Schedules" },
  { to: "/archive", label: "Archive" },
  { to: "/keynote-speakers", label: "Keynote Speakers" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-[1180px] w-full px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Left logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Assam University"
              width={64}
              height={64}
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Center menu */}
          <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#1E2A54]">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `hover:opacity-80 transition ${
                      isActive ? "underline underline-offset-4" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 shrink-0">
            {/* Right logo */}
            <img
              src={amrit}
              alt="AMRIT 2026"
              width={64}
              height={64}
              className="h-14 md:h-16 w-auto"
            />

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#1E2A54] border border-[#1E2A54]/20 hover:bg-[#1E2A54]/5 active:bg-[#1E2A54]/10 transition"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute inset-x-0 top-full bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[80vh]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="px-4 py-2 text-base font-medium text-[#1E2A54]">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-[#1E2A54]/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
