import React from 'react';
import './App.css';
import SelfIntro from './components/selfIntro';
import Projects from './components/projects';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <SelfIntro />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;