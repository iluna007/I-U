import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function navLinkClass(theme) {
  return theme === "dark"
    ? "text-sm font-medium text-neutral-100 transition-colors duration-200 hover:text-neutral-300 focus:text-neutral-300 link-underline"
    : "text-sm font-medium text-neutral-800 transition-colors duration-200 hover:text-neutral-600 focus:text-neutral-600 link-underline";
}

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // 👇 Scroll automático cuando cambia el hash
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Espera a que la página monte
    setTimeout(scroll, 100);
  }, [location]);

  return (
    <nav className={`sticky top-0 z-50 border-b shadow-lg backdrop-blur-md transition-all duration-300 ${
        theme === "dark"
          ? "border-neutral-800 bg-neutral-900/90 shadow-black/10"
          : "border-neutral-200 bg-white/95 shadow-neutral-900/5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-105 focus:scale-105"
        >
          <img
            src={
              theme === "dark"
                ? "/URGENTE H_COLOR N.svg"
                : "/URGENTE H_COLOR.svg"
            }
            alt="Investigación Urgente"
            className="h-10 w-auto"
          />
        </NavLink>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 md:hidden ${
            theme === "dark"
              ? "text-neutral-200 hover:bg-neutral-800 hover:text-white focus:ring-offset-neutral-900"
              : "text-neutral-700 hover:bg-neutral-100 focus:ring-offset-white"
          }`}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Abrir menú</span>
          <span
            className={`flex flex-col gap-1 transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          } absolute left-0 right-0 top-full border-b backdrop-blur md:static md:border-0 md:bg-transparent ${
            theme === "dark"
              ? "border-neutral-800 bg-neutral-900/95"
              : "border-neutral-200 bg-white/98"
          }`}
        >
          <ul className="flex flex-col items-start gap-1 px-4 py-3 md:flex-row md:items-center md:gap-6 md:px-0 md:py-0">
            <li>
              <NavLink
                to="/"
                className={navLinkClass(theme)}
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/#about"
                className={navLinkClass(theme)}
                onClick={() => setIsOpen(false)}
              >
                ¿Quiénes Somos?
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/#objectives"
                className={navLinkClass(theme)}
                onClick={() => setIsOpen(false)}
              >
                Objetivos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/#services"
                className={navLinkClass(theme)}
                onClick={() => setIsOpen(false)}
              >
                ¿Qué hacemos?
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={navLinkClass(theme)}
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </NavLink>
            </li>

            <li className="md:ml-4">
              <button
                type="button"
                aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                className={`rounded-full border p-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 active:scale-95 ${
                  theme === "dark"
                    ? "border-neutral-500 text-neutral-100 hover:border-neutral-400 hover:bg-neutral-700 hover:text-neutral-200 focus:ring-offset-neutral-900"
                    : "border-neutral-400 text-neutral-800 hover:border-neutral-600 hover:bg-neutral-100 focus:ring-offset-white"
                }`}
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;