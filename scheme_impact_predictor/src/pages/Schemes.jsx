import React from 'react';
import './Schemes.css';

const schemes = [
  { name: "Prime Technology Drive", type: "Banking, Financial Services, and Insurance" },
  { name: "Navachar Yojana", type: "Infrastructure Development" },
  { name: "Shiksha Shakti Abhiyan", type: "Education" },
  { name: "Krishi Udaan Scheme", type: "Agriculture and Rural Development" },
  { name: "Swasthya Suraksha Mission", type: "Healthcare" },
  { name: "Digital Disha Initiative", type: "Technology and Innovation" },
  { name: "Jal Jeevan Samriddhi", type: "Water Resource Management" },
  { name: "Yuva Udyami Vikas", type: "Skill Development and Employment" },
  { name: "Gramin Gati Mission", type: "Transport and Connectivity" },
  { name: "Samriddh Krishi Abhiyan", type: "Agricultural Welfare" },
];

const Schemes = () => {
  return (
    <div className="flowchart-container">
      <h1>Schemes and Their Categories</h1>
      <div className="flowchart">
        {schemes.map((scheme, index) => (
          <div className="scheme-box" key={index}>
            <h3>{scheme.name}</h3>
            <p>{scheme.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
