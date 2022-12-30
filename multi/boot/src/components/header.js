import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand" href="#">
          <p className="nav">Navbar</p>
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/pwa/">
                <p className="btn">Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pwa/users">
                <p className="btn">Users</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pwa/about">
                <p className="btn">About</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
