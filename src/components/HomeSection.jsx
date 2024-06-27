import React, { useEffect } from "react";
import Typed from "typed.js";

const HomeSection = ({ setRun }) => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".typed-text-output", {
      strings: [
        "Web Designer",
        "Web Developer",
        "Full Stack Web Developer",
        "Hybrid Mobile App Developer",
      ],
      typeSpeed: 50,
      loop: true, // Optional, enables continuous typing
    });

    // Clean up on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container-fluid bg-light my-6 mt-0" id="home">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 py-6 pb-0 pt-lg-0">
            <h3 className="text-primary mb-3">I'm</h3>
            <h1 className="display-3 mb-3">Indranil Mondal</h1>
            <h2 className="typed-text-output d-inline"></h2>
            <div className="d-flex align-items-center pt-5">
              {/* <a href="./Indranil_Mondal_CV.pdf" className="btn btn-primary py-3 px-4 me-5">
                Download CV
              </a> */}
              <a
                href={require("./Indranil_Mondal_Resume.pdf")}
                className="btn btn-primary py-3 px-4 me-5"
                download = "Indranil_Mondal_Resume"
              >
                Download CV
              </a>

              <button
                type="button"
                className="btn-play"
                // data-bs-toggle="modal"
                // data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                // data-bs-target="#videoModal"
                onClick={() => setRun(true)}
              >
                <span></span>
              </button>
              <h5 className="ms-4 mb-0 d-none d-sm-block"> Start Tour</h5>
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              clipPath: "circle(50% at 50% 50%)",
              position: "relative",
              // width: "300px",
              // height: "300px",
              background: "linear-gradient(to top, #FAFAFB 50%, #FFC448 100%)",
            }}
          >
            <img
              className="img-fluid"
              src="img/myProfile.png"
              alt=""
              width={"100%"}
              style={
                {
                  // clipPath: ` polygon(100% 0%, 100% 52%, 100% 100%, 14% 99%, 0% 50%, 13% 0)`,
                  // border: "2px solid black",
                }
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
