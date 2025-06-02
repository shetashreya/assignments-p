import React from 'react';

const ProjectCard = ({ title, description, isLive }) => {
  const badgeStyle = {
    padding: '5px 10px',
    borderRadius: '8px',
    color: 'white',
    backgroundColor: isLive ? 'green' : 'red'
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '10px',
      marginBottom: '15px'
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <span style={badgeStyle}>
        {isLive ? 'Live 🚀' : 'Under Development 🔧'}
      </span>
    </div>
  );
};

export default ProjectCard;
