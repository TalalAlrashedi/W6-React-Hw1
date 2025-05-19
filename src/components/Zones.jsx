import React from "react";

const zones = [
  {
    title: "Boulevard World",
    link: "/en/zones/boulevard-world",
    img: "https://images.ctfassets.net/vy53kjqs34an/14DUIlTcHUbI5BXufzpwWy/36e1e391f3b2ea884fc58223c737c616/KV-Webook-Sizes_1280x1280.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/4UwVIgWmMI4JAQXP3yXPWR/3cd131fc453a2fc2f31ae8fa6c5578af/blvd_world_colors.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3rth2yenJlvYpm0TM6eXoq/ddb4f053ec4183b88a4f0a59b4f72d2e/stc.png",
  },
  {
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    img: "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
  },
  {
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    img: "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
  },
  {
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    img: "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
  },
  {
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    img: "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
  },
  {
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    img: "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
  },
  {
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    img: "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
  },
  {
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    img: "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
  },
  {
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    img: "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
  },
  {
    title: "Boulevard City",
    link: "/en/zones/boulevard-city",
    img: "https://images.ctfassets.net/vy53kjqs34an/5GbJPtJSfoTaw1qJmfgW7x/6b34d95bdeddf7be4a68dd9a52a1db84/1280_xs_1280_px.jpg",
    logo: "https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png",
    sponsor:
      "https://images.ctfassets.net/vy53kjqs34an/3ZiM9z7X6E42nHibI6EIuh/cc3244ab88349c6a92cb9f5f72bfb903/suliman.png",
  },
];

const Zones = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold" style={{ color: "white" }}>
          Welcome to Riyadh Season 2024
        </h1>
        <h2 className="h4 text-muted">14 Zones to Explore</h2>
      </div>

      <div className="row g-4">
        {zones.map((zone, index) => (
          <div className="col-6 col-md-4 col-lg-3" key={index}>
            <a href={zone.link} className="text-decoration-none text-dark">
              <div className="position-relative overflow-hidden rounded border">
                <img
                  src={zone.img}
                  alt={zone.title}
                  className="img-fluid w-100"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 text-white p-2">
                  <img
                    src={zone.logo}
                    alt={`${zone.title} logo`}
                    className="mb-2"
                    style={{ maxWidth: "20%" }}
                  />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Zones;
