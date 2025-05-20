import React from 'react';

const RiyadhSection = () => {
  return (
    <section className="container py-5" style={{color: "white"}}>
      <div className="row g-4 flex-column flex-xl-row">

        <div className="col-12 col-xl-6 d-flex flex-column gap-4">

          <div className="row g-4 flex-grow-1">

            <div className="col-12 col-sm-3 d-none d-sm-flex align-items-center justify-content-center  rounded p-4">
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/3Psaka2Ja20ebl34oSkWs5/2a7e698f9f5d84ff29351ad9eb39bde5/Logo_icon.svg?fm=webp&w=150&h=150"
                width="150"
                height="150"
                alt="Plain logo"
              />
            </div>

            {/* About Text */}
            <div className="col-12 col-sm-9  rounded p-4">
              <p className="h4 fw-semibold">About Riyadh Season</p>
              <p className="small">
                Riyadh Season is one of the world’s largest winter entertainment events. Variety of food from around the world, courtesy of exclusive restaurants — plus countless exciting surprises. The festivities capture the essence of Saudi, from its Najdi heritage to its present-day dynamism.
              </p>
              <div className="d-flex justify-content-end gap-2 small"></div>
            </div>
          </div>


          <div className="d-flex gap-4 flex-wrap">
            <div className=" p-4 text-center">
              <h2 className="h4 h2-xl"> </h2>
            </div>

            <div className=" rounded p-4" style={{border: "2px solid white"}} >
              <div className="mx-auto d-flex align-items-center justify-content-center" style={{ maxWidth: '200px', height: '100%' }}>
                <div className="text-center">
                  <p className="fw-semibold text-uppercase mb-1">Starts</p>
                  <p className="fw-bold display-6 mb-1">12</p>
                  <p className="small">October</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-12 col-xl-6">
          <div className="ratio ratio-16x9">
            <iframe
              title="RS Promo 2023"
              src="https://www.youtube.com/embed/g8-NjAOWhME?&autoplay=1"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiyadhSection;