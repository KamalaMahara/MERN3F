import React from 'react';
import './Projects.css'; // Assuming you create a separate CSS file for projects or add this to a main stylesheet

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        My <span className="highlighted-text">Projects</span>
      </h2>

      {/* Placeholder for project cards/list - currently empty */}
      <div className="projects-grid">
        {/* Project cards will go here */}
      </div>

      {/* Upcoming Projects Notice */}
      <div className="upcoming-notice bounce-animation">
        <p className="notice-text">
          New Projects Are Currently Under Development 🚧
          <br />
          Check back soon for exciting full-stack MERN applications.
        </p>
      </div>

    </section>
  );
}

export default Projects;