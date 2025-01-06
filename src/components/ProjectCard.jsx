import React from "react";

const ProjectCard = ({ title, description, github }) => {
  const handleCardClick = () => {
    window.open(github, "_blank"); 
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;