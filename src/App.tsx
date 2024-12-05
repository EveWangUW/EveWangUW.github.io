import React from 'react';
import './App.css';
import SelfIntro from './components/selfIntro';
import Projects from './components/projects';
import Footer from './components/footer';
import Timeline from './components/timeline';

const App: React.FC = () => {
  return (
    <div className="App">
      <SelfIntro />
      <Timeline/>
      <Projects />
      <Footer />
    </div>
  );
};

export default App;