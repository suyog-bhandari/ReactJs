import { Link, useLocation } from "react-router-dom";
import "./index.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <div className="header">
      <div>
        <Link className="link" to="/">
          <h2>Logo</h2>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link
              className={`link ${location.pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${location.pathname === "/login" ? "active" : ""}`}
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className={`link ${location.pathname === "/about" ? "active" : ""}`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`link ${location.pathname === "/contact" ? "active" : ""}`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
