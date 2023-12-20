import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-secondary fs-5">Berita Terkini</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className="btn btn-dark m-2"
                onClick={() => setCategory("general")}
              >
                Umum
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-dark m-2"
                onClick={() => setCategory("technology")}
              >
                Teknologi
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-dark m-2"
                onClick={() => setCategory("business")}
              >
                Bisnis
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-dark m-2"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-dark m-2"
                onClick={() => setCategory("sports")}
              >
                Olahraga
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-dark m-2"
                onClick={() => setCategory("health")}
              >
                Kesehatan
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
