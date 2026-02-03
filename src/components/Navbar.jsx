import { NavLink } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* LOGO */}
        <span className="navbar-brand d-flex align-items-center">
          <img
            src={
              theme === "dark"
                ? "/URGENTE H_COLOR N.svg"
                : "/URGENTE H_COLOR.svg"
            }
            alt="Investigación Urgente"
            height="32"
          />
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                ¿Quiénes Somos?
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#objectives"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("objectives");
                }}
              >
                Objetivos
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#objectives"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("objectives");
                }}
              >
                ¿Qué hacemos?
              </a>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Proyectos
              </NavLink>
            </li>

            <li className="nav-item ms-3">
              <button
                className="btn btn-outline-secondary btn-sm"
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
