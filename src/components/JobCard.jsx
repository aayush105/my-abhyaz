import React, { useState } from 'react';

const JobCard = ({ title, description, requirements }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const handleApplyClick = () => {
    
    const formElement = document.getElementById('form-section');

    formElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="card m-3"
      style={{
        width: '100%',
        height: '100%',
        // marginBottom: '20px',
        // marginTop: '20px',
        transition: 'background-color 0.3s',
        backgroundColor: isHovered ? '#343a40' : 'white',
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      <div className="card-body" style={{ color: isHovered ? 'white' : 'black', height: '100%' }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>Requirements:</strong> {requirements}</p>
        <button className="btn btn-primary" onClick={handleApplyClick}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
