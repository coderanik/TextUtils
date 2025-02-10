import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg shadow-sm ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
          <span className="me-2" role="img" aria-label="text">✍️</span>
          <span className="gradient-text">{props.title}</span>
        </a>
        <button
          className="navbar-toggler border-0"
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link px-3 fw-medium" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 fw-medium" aria-current="page" href="/about">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className={`form-check form-switch me-3 ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}>
              <input 
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label ms-2 fw-medium" htmlFor="flexSwitchCheckDefault">
                {props.mode === 'dark' ? '☀️ Light' : '🌙 Dark'}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}