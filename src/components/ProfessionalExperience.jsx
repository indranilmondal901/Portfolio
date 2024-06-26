import React,{useEffect, useState} from 'react';
import ProfessionalExp from "./ProfessionalExp.json";

const ProfessionalExperience = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        setProjects(ProfessionalExp);
    },[])

  return (
    <div className="container-xxl py-6" id="experience">
      <div className="container">
        {projects.map(company => (
          <div key={company.companyName}>
            <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
              <div className="col-lg-6">
                <h1 className="display-5 mb-0">{company.companyName}</h1>
              </div>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.1s">
              {company.projects.map(project => (
                <div key={project.title} className="col-12">
                  <div className="bg-light rounded p-4">
                    <h3 className="mb-3">{project.title}</h3>
                    <ul>
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
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

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProfessionalExp from './ProfessionalExp.json';

// const ProfessionalExperience = () => {
//   const [projects, setProjects] = useState([]);
//   const [imageURLs, setImageURLs] = useState({});

//   useEffect(() => {
//     setProjects(ProfessionalExp);
//   }, []);

//   useEffect(() => {
//     const fetchImage = async (url, projectName) => {
//       try {
//         const response = await axios.get(url);
//         const html = response.data;
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');
//         const ogImage = doc.querySelector('meta[property="og:image"]');
//         console.log("----------------",ogImage);
//         if (ogImage) {
//           setImageURLs(prevState => ({
//             ...prevState,
//             [projectName]: ogImage.getAttribute('content')
//           }));
//         }
//       } catch (error) {
//         console.error(`Error fetching image for ${projectName}:`, error);
//       }
//     };

//     // Fetch image URLs for each project
//     projects.forEach(company => {
//       company.projects.forEach(project => {
//         fetchImage(project.url, project.title);
//       });
//     });
//   }, [projects]);

//   return (
//     <div className="container-xxl py-6" id="experience">
//       <div className="container">
//         {projects.map(company => (
//           <div key={company.companyName}>
//             <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
//               <div className="col-lg-6">
//                 <h1 className="display-5 mb-0">{company.companyName}</h1>
//               </div>
//             </div>
//             <div className="row g-4 wow fadeInUp" data-wow-delay="0.1s">
//               {company.projects.map(project => (
//                 <div key={project.title} className="col-12">
//                   <div className="bg-light rounded p-4">
//                     <h3 className="mb-3">{project.title}</h3>
//                     <ul>
//                       {project.details.map((detail, index) => (
//                         <li key={index}>{detail}</li>
//                       ))}
//                     </ul>
//                     <a href={project.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
//                   </div>
//                   {imageURLs[project.title] && (
//                     <img src={imageURLs[project.title]} alt="Website Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfessionalExperience;

