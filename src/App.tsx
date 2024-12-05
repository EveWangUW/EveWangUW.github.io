import React from 'react';
import './App.css';

function App() {
  const projects = [
    { name: 'GitHub User Analysis', link: 'https://github.com/EveWangUW/IMT542-GitHubUserAnalysis-FinalProject' },
    { name: 'Cybersecurity Lab', link: 'https://github.com/EveWangUW/IMT555-Cybersecurity-Lab' },
    { name: 'Project 3', link: 'https://example.com/project3' },
    { name: 'GitHub User Analysis', link: 'https://github.com/EveWangUW/IMT542-GitHubUserAnalysis-FinalProject' },
    { name: 'Cybersecurity Lab', link: 'https://github.com/EveWangUW/IMT555-Cybersecurity-Lab' },
    { name: 'Project 3', link: 'https://example.com/project3' },
    ];

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="profile-photo.jpg"
          alt="Profile"
          className="profile-photo"
        />
        <h1>Welcome to Eve's Personal Website!👩🏻‍💻</h1>
        <p> 👋 Hi, I'm Eve! </p>
        <p> I'm a software engineer with a passion for creating impactful applications and solving challenging problems.</p>
      </header>
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
      <footer className="App-footer">
        <a
          href="https://www.linkedin.com/in/eve-wang-uw/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/EveWangUW"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;