import React, { useEffect, useState } from 'react';
import keyRolesAllData from './KeyRolesAllData.json'; 

const KeyRoles = () => {
  // Assuming keyRolesAllData is an array of objects
  const [state, setState] = useState([]); // Initialize as an empty array

  useEffect(() => {
    setState(keyRolesAllData); // Set state with keyRolesAllData on mount
  }, []);

  return (
    <div className="container-xxl py-6" id="key-roles">
      <div className="container">
        <h4 className="display-5 mb-5">Key Roles</h4>
        {state.map((company, index) => (
          <div key={index} className="mb-5">
            <h2 style={{backgroundColor:"#533AA7", color:"#fff", textAlign:"center"}}>{company.companyName}</h2>
            {company.keyRoles.map((role, index) => (
              <div key={index} className="mb-4">
                <h3>{role.position}</h3>
                <ul>
                  {role.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyRoles;
