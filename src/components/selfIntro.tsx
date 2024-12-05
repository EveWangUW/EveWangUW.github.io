import React from 'react';
import '../App.css';

const SelfIntro: React.FC = () => {
  return (
    <header className="App-header">
      <img src="profile-photo.jpg" alt="Profile" className="profile-photo" />
      <h1>Welcome to Eve's Personal Website!👩🏻‍💻</h1>
      <p>👋 Hi, I'm Eve!</p>
      <p>
        I'm a software engineer with a passion for creating impactful
        applications and solving challenging problems.
      </p>
    </header>
  );
};

export default SelfIntro;