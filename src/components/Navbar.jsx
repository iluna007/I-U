import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinkClass =
  "text-sm font-medium text-neutral-100 transition-colors duration-200 hover:text-blue-400 focus:text-blue-400 link-underline";

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/90 shadow-lg shadow-black/10 backdrop-blur-md transition-shadow duration-300">
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
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-200 transition-colors duration-200 hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900 md:hidden"
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
          } absolute left-0 right-0 top-full border-b border-neutral-800 bg-neutral-900/95 backdrop-blur md:static md:border-0 md:bg-transparent`}
        >
          <ul className="flex flex-col items-start gap-1 px-4 py-3 md:flex-row md:items-center md:gap-6 md:px-0 md:py-0">
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className={navLinkClass}
                onClick={() => scrollToSection("about")}
              >
                ¿Quiénes Somos?
              </button>
            </li>
            <li>
              <button
                type="button"
                className={navLinkClass}
                onClick={() => scrollToSection("objectives")}
              >
                Objetivos
              </button>
            </li>
            <li>
              <button
                type="button"
                className={navLinkClass}
                onClick={() => scrollToSection("objectives")}
              >
                ¿Qué hacemos?
              </button>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </NavLink>
            </li>
            <li className="md:ml-4">
              <button
                type="button"
                className="rounded-full border border-neutral-500 px-3 py-1.5 text-xs font-medium text-neutral-100 transition-all duration-200 hover:scale-105 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900 active:scale-95"
                onClick={toggleTheme}
              >
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
