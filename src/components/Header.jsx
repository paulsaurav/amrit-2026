import logo from "/aus-logo.png";
import amrit from "/amrits.png";
import { Link, NavLink } from "react-router-dom";

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
              className="h-16 w-auto"
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

          {/* Right logo */}
          <div className="shrink-0">
            <img
              src={amrit}
              alt="AMRIT 2026"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
