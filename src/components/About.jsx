import React from "react";

const About = () => {
  return (
    <div className="container-xxl py-6" id="about">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-center mb-5">
              <div
                className="years flex-shrink-0 text-center me-4"
                style={{ marginRight: "0.2 rem" }}
              >
                <h2 className="display-1 mb-0">1<span style={{fontSize:"2rem",position:"absolute",top:"20"}}>+</span></h2>
                <h5 className="mb-0">Years</h5>
              </div>
              <h5 className="lh-base mb-0">
                of working experience as a Full Stack Web Developer (MERN STACK)
              </h5>
            </div>
            <p className="mb-4">
              With over a year of experience as a Full Stack Web Developer
              specializing in the MERN stack, I have honed my skills in
              developing dynamic and responsive web applications. My journey has
              been marked by a passion for coding and a commitment to delivering
              high-quality solutions. I thrive on challenges and am dedicated to
              continuous learning and improvement. Whether it's creating
              efficient backend services or crafting engaging user interfaces, I
              bring a comprehensive approach to every project. My goal is to
              build products that not only meet but exceed client expectations,
              ensuring satisfaction and success in every endeavor.
            </p>

            {/* <p className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>Afordable
              Prices
            </p>
            <p className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>High
              Quality Product
            </p>
            <p className="mb-3">
              <i className="far fa-check-circle text-primary me-3"></i>On Time
              Project Delivery
            </p> */}
            <a className="btn btn-primary py-3 px-5 mt-3" href="">
              Read More
            </a>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                {/* <img className="img-fluid rounded" src="img/about-1.jpg" alt="" /> */}
                <img
                  className="img-fluid rounded"
                  src="https://intolap.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-04-11-at-21.11.42_51d8925f.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-6">
                {/* <img className="img-fluid rounded" src="img/about-2.jpg" alt="" /> */}
                <img
                  className="img-fluid rounded"
                  src="https://intolap.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-02-at-12.16.53_0ba8bebf.jpg"
                  alt=""
                />
                <img
                  className="img-fluid rounded"
                  src="img/about-2-td.jpg"
                  alt=""
                  style={{ marginTop: "3px" }}
                />
              </div>
            </div>
            {/* <div className="d-flex align-items-center mb-3">
              <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
              <h2
                className="text-primary fw-bold mb-0"
                data-toggle="counter-up"
              >
                1234
              </h2>
            </div> 
            <p className="mb-4">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
              stet est diam amet diam ipsum clita labore dolor duo clita.
            </p>*/}
            <div className="d-flex align-items-center mb-3">
              <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
              <h2
                className="text-primary fw-bold mb-0"
                data-toggle="counter-up"
              >
                5
              </h2>
            </div>
            <p className="mb-0">
              Over the past year, I have successfully completed four major
              projects, each showcasing my expertise in the MERN stack. From
              developing dynamic quiz platforms to automating epelle spelling
              competitions and creating sophisticated football management
              applications, I have consistently delivered high-quality, scalable
              solutions that meet client needs and drive their success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
