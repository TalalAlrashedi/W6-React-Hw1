import React from "react";

const Navbar = () => {
  return (
    <header className="mt-2 p-3">
      <nav className="container-fluid d-flex justify-content-between align-items-center px-3 h-100">
        <details
          className="bg-transparent border-0 p-0 m-0"
          style={{ zIndex: 1050 }}
        >
          <summary
            className="btn btn-dark border-0 p-3"
            style={{ width: "50px" }}
          >
            <span
              className="d-block bg-white mb-1"
              style={{ height: "3px", width: "25px" }}
            />
            <span
              className="d-block bg-white mb-1"
              style={{ height: "3px", width: "25px" }}
            />
            <span
              className="d-block bg-white"
              style={{ height: "3px", width: "25px" }}
            />
          </summary>

          <a
            className="btn btn-primary w-100 mb-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Booklet
          </a>
          <a style={{ color: "white", textDecoration: "none" }} href="">
            العربية
          </a>
        </details>

        <div className="text-center mx-auto">
          <a href="/" className="d-inline-block">
            <img
              src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png?fm=webp&w=85&h=110"
              alt="Logo"
              width="85"
              height="110"
            />
          </a>
        </div>

        <div className="d-none d-md-flex gap-4 align-items-center">
        <a  style={{ color: "white", textDecoration: "none" }} href="">
            العربية
          </a>
          <a
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Booklet
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
