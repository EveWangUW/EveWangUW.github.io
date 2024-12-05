import React from 'react';
import '../App.css';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;