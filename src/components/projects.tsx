import React from 'react';
import '../App.css';

interface Project {
  name: string;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    { name: 'GitHub User Analysis', link: 'https://github.com/EveWangUW/IMT542-GitHubUserAnalysis-FinalProject' },
    { name: 'Cybersecurity Lab', link: 'https://github.com/EveWangUW/IMT555-Cybersecurity-Lab' },
    { name: 'Project 3', link: 'https://example.com/project3' },
  ];

  return (
    <main className="project-section">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;