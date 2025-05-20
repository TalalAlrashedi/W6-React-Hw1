import React from 'react';
import './RecapSection.css'; 

const RecapSection = () => {
  return (
    <section id="rs-recap-2023" className="recap-section">

      <svg
        width="812"
        height="705"
        viewBox="0 0 812 705"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="recap-bg-svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M811.5 705H596.5H401.5L309.092 648.995L-36 449.991C81.9193 271.136 235.461 117.778 414.53 0L811.5 705Z"
          fill="#987BFF"
        />
      </svg>

      <div className="recap-container">
        <div className="recap-grid">
          {/* Text Content */}
          <div className="recap-text">
            <img
              src="https://images.ctfassets.net/vy53kjqs34an/1gbFl4Q7C1bI7YyssruI2V/637b666df8a9d2330d6e6ea81b7fe307/Button-3.png?fm=webp&w=70&h=70"
              alt="Watch Riyadh Season 2023 Recap"
              className="recap-icon"
            />
            <h3 className="recap-heading">Watch Riyadh Season 2023 Recap</h3>
            <a
              href="https://www.youtube.com/c/riyadhseason"
              target="_blank"
              rel="noopener noreferrer"
              className="recap-button"
            >
              Watch more moments
            </a>
          </div>


          <div className="recap-video-wrapper">
            <video
              className="recap-video"
              controls
              playsInline
              disablePictureInPicture
              poster="https://images.ctfassets.net/vy53kjqs34an/5PcL5NRQvrljV31YLYi2UE/738df0fc1368a14eaec969afc8eb555a/Screenshot_2024-09-02_192441.png"
            >
              <source
                src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
                type="video/mp4"
              />

            </video>
          </div>
        </div>


        <div className="recap-button-mobile">
          <a
            href="https://www.youtube.com/c/riyadhseason"
            target="_blank"
            rel="noopener noreferrer"
            className="recap-button"
          >
            Watch more moments
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecapSection;