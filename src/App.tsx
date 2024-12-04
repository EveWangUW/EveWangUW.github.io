import React from 'react';
import './App.css';

function App() {
  const projects = [
    { name: 'Project 1', link: 'https://example.com/project1' },
    { name: 'Project 2', link: 'https://example.com/project2' },
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
        <p>
          Hi, I'm Eve! I'm a software engineer with a passion for creating
          impactful applications and solving challenging problems.
        </p>
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
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-github"
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
