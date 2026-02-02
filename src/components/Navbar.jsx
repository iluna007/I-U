import { NavLink } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body">
      <div className="container-fluid">
        <span className="navbar-brand">Investigación Urgente</span>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
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
