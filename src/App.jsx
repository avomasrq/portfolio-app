import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Stats from './components/Stats';
import SocialLinks from './components/SocialLinks';
import AboutMe from './components/AboutMe';
import BackgroundAnimation from './components/BackgroundAnimation';

const App = () => {
  const projects = [
    {
      title: "Media as Medium",
      description: "A project showcasing how to leverage Medium's API for publishing content.",
      github: "https://github.com/avomasrq/media-as-medium",
    },
    {
      title: "Twitter App",
      description: "A Twitter integration app that allows posting and retrieving tweets via API.",
      github: "https://github.com/avomasrq/twitter",
    },
  ];

  return (
    <div className="app">
      <BackgroundAnimation />

      <div className="content">
        <Header />
        <AboutMe />
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              github={project.github}
            />
          ))}
        </div>
        <Stats />
        <SocialLinks />
      </div>
    </div>
  );
};

export default App;