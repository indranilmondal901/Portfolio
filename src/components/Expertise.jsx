import React from "react";
import { useNavigate } from "react-router-dom";

const Expertise = () => {
  const navigate = useNavigate();
  return (
    <div className="container-xxl py-6 pb-5" id="skill">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 mb-5">Skills & Experience</h1>
            <p className="mb-4">
              With a solid foundation in the MERN stack, I have developed a
              diverse skill set that encompasses both front-end and back-end
              development. My experience spans building dynamic web
              applications, optimizing performance, and ensuring seamless user
              experiences. I am proficient in React, Node.js, Express, MongoDB,
              and have a keen eye for detail and a passion for clean, efficient
              code. Throughout my career, I have successfully delivered multiple
              projects, each tailored to meet specific client needs and drive
              business growth.
            </p>

            <h3 className="mb-4">My Skills</h3>
            <div className="row align-items-center">
              <div className="col-md-4">
                <h6>Programming Language</h6>
                <hr className="text-primary my-2" />
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">C</h6>
                    <h6 className="font-weight-bold">60%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Javascript</h6>
                    <h6 className="font-weight-bold">90%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Python</h6>
                    <h6 className="font-weight-bold">60%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h6>
                  <span style={{ visibility: "hidden" }}>FrontEnd</span>{" "}
                  FrontEnd
                </h6>
                <hr className="text-primary my-2" />
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">HTML</h6>
                    <h6 className="font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">CSS</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Bootstrap</h6>
                    <h6 className="font-weight-bold">90%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h6>FrontEnd FrameWork</h6>
                <hr className="text-primary my-2" />
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">React JS</h6>
                    <h6 className="font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Material UI</h6>
                    <h6 className="font-weight-bold">90%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Core UI</h6>
                    <h6 className="font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h6>BackEnd</h6>
                <hr className="text-primary my-2" />
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Node.js</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Express.js</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h6>Data Base</h6>
                <hr className="text-primary my-2" />
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">MongoDb</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4" style={{ visibility: "hidden" }}>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Sql</h6>
                    <h6 className="font-weight-bold">30%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-yellow"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4">
                <h6>API</h6>
                <hr className="text-primary my-2" />
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Open AI API</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Whisper API</h6>
                    <h6 className="font-weight-bold">60%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-yellow"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Narakeet API</h6>
                    <h6 className="font-weight-bold">60%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-yellow"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div> */}
              <div className="col-md-4">
                <h6>Other</h6>
                <hr className="text-primary my-2" />
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Socket.io</h6>
                    <h6 className="font-weight-bold">70%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-red"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Open AI Integration</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                {/* <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Whisper API</h6>
                    <h6 className="font-weight-bold">60%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-yellow"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Narakeet API</h6>
                    <h6 className="font-weight-bold">60%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-yellow"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
              <li className="nav-item w-50">
                <button
                  className="nav-link w-100 py-3 fs-5 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  Experience
                </button>
              </li>
              <li className="nav-item w-50">
                <button
                  className="nav-link w-100 py-3 fs-5"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  Education
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6">
                    <h5>MERN Stack Developer</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">June,2023 - June,2023</p>
                    <h6 className="mb-0"> INTOLAP TECHNOLOGIES PVT LTD </h6>
                    <button className="btn btn-primary py-2 px-3 mt-2" onClick={()=>navigate("/key-roles")}>Key Roles in Company</button>
                    <button className="btn btn-primary py-2 px-3 mt-2" onClick={()=>navigate("/professional-experience")} >View All Projects</button>
                  </div>
                  {/* <div className="col-sm-6">
                    <h5>Product Designer</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2000 - 2045</p>
                    <h6 className="mb-0">Apex Software Inc</h6>
                  </div>
                  <div className="col-sm-6">
                    <h5>Web Designer</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2000 - 2045</p>
                    <h6 className="mb-0">Apex Software Inc</h6>
                  </div>
                  <div className="col-sm-6">
                    <h5>Apps Designer</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2000 - 2045</p>
                    <h6 className="mb-0">Apex Software Inc</h6>
                  </div> */}
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6">
                    <h5>MCA</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2023 - Present</p>
                    <h6 className="mb-0">Manipal University</h6>
                  </div>

                  <div className="col-sm-6">
                    <h5>Hybrid Mobile App Development</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2024 - Present</p>
                    <h6 className="mb-0">META</h6>
                  </div>

                  <div className="col-sm-6">
                    <h5>MERN Stack Web Development</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2022 - 2023</p>
                    <h6 className="mb-0">10x Academy</h6>
                  </div>

                  {/* <div className="col-sm-6">
                    <h5>Apps Design</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">2000 - 2045</p>
                    <h6 className="mb-0">Cambridge University</h6>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
