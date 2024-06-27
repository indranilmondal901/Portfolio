import React, { useEffect, useState } from "react";
import ProfessionalExp from "./ProfessionalExp.json";

const ProfessionalExperience = ({ data }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(ProfessionalExp);
  }, []);
  return (
    <div className="container-xxl py-6" id="experience">
      <div className="container">
        {projects.map((company) => (
          <div key={company.companyName}>
            <div
              className="row g-5 mb-5 align-items-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="col-lg-6">
                <h1 className="display-5 mb-0">{company.companyName}</h1>
              </div>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.1s">
              {company.projects.map((project) => (
                <div key={project.title} className="col-12">
                  <div className="bg-light rounded p-4">
                    <h3 className="mb-3">{project.title}</h3>
                    <ul>
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
