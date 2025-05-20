import React from "react";

const Footer = () => {
  return (
    <footer className="border-top pt-4 text-white ">
      <div className="container pb-4">
        <div className="text-center mb-4"></div>

        <div className="d-flex flex-column align-items-center gap-4 py-4 py-xl-5 flex-xl-row justify-content-xl-between">
          <div className="d-flex flex-column align-items-center gap-3 flex-lg-row">
            <figure className="mb-0">
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png"
                width="85"
                height="110"
                alt="Riyadh Season Logo"
              />
            </figure>
            <ul className="list-unstyled d-flex gap-2 mb-0">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="https://images.ctfassets.net/vy53kjqs34an/12dxmhGOwDp0O60rGkGaoU/2316038e3becb17702597cf2782052f1/Button-1.png?fit=pad&amp;w=55&amp;h=55"
                    width="55"
                    height="55"
                    alt="Facebook Icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="https://images.ctfassets.net/vy53kjqs34an/7FPODYVihpzuYzN2hoDlD2/1e889247bc73807bd4844d210f91e2db/Button.png?fit=pad&amp;w=55&amp;h=55"
                    width="55"
                    height="55"
                    alt="X Icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="https://images.ctfassets.net/vy53kjqs34an/6vlq9w8miTqnUyvaPVTGlt/c7098a6a02a829656ad0150412caa439/Button-2.png?fit=pad&amp;w=55&amp;h=55"
                    width="55"
                    height="55"
                    alt="Instagram Icon"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex flex-column align-items-center gap-2 flex-lg-row justify-content-xl-end w-100 text-center">
            <p className="text-sm m-0"></p>
            <div className="d-flex align-items-center"></div>
          </div>
        </div>

        <div className="border-top pt-3 d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <nav className="py-3 text-center">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 mb-2 mb-lg-0">
              <li>
                <a style={{ color: "white", textDecoration: "none" }} href="">
                  العربية
                </a>
              </li>
              <li>
                <a
                  href="/en/privacy"
                  className="text-white text-decoration-none small"
                >
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a
                  href="/en/terms"
                  className="text-white text-decoration-none small"
                >
                  TERMS & CONDITIONS
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center text-white-50 small mb-3 mb-lg-0">
            © 2024 RIYADH SEASON. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
