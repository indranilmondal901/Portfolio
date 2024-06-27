import React, { useState, useEffect } from 'react';
import projectsData from './ProjectsData.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    // Simulating fetching data from JSON file
    setProjects(projectsData);
  }, []);

  // const handleFilterClick = (filter) => {
  //   setActiveFilter(filter);
  // };

  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6" >
            <h1 className="display-5 mb-0">My Projects</h1>
            <a className="btn btn-square btn-primary me-2" href="https://github.com/indranilmondal901?tab=repositories"><i className="fab fa-github"></i></a>
          </div>
          {/* <div className="col-lg-6 text-lg-end">
            <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
              <li className={`mx-3 ${activeFilter === '*' ? 'active' : ''}`} onClick={() => handleFilterClick('*')}>All Projects</li>
              <li className={`mx-3 ${activeFilter === 'first' ? 'active' : ''}`} onClick={() => handleFilterClick('first')}>UI/UX Design</li>
              <li className={`mx-3 ${activeFilter === 'second' ? 'active' : ''}`} onClick={() => handleFilterClick('second')}>Graphic Design</li>
            </ul>
          </div> */}
        </div>
        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
          {projects.map((project) => (
            (activeFilter === '*' || project.category === activeFilter) && (
              <div key={project.id} className={`col-lg-4 col-md-6 portfolio-item ${project.category}`}>
                <div className="portfolio-img rounded overflow-hidden">
                  <img className="img-fluid" src={project.image} alt={project.title}/>
                  <div className="portfolio-btn">
                    <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.lightboxImage} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                    <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.externalLink}><i className="fa fa-link"></i></a>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
