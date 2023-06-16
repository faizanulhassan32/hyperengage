import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Stats from './components/Stats';
import ImgsOverlapped from './components/ImgsOverlapped';
import Dashboard from './components/Dashboard';
import ArcShape from './components/ArcShape';
import SimpleText from './components/SimpleText';
import News from './components/News';
import SecondLast from './components/SecondLast';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Stats />
      <ImgsOverlapped />
      <Dashboard />
      <ArcShape />
      <SimpleText />
      <News />
      <SecondLast />
      <Footer />
    </div>
  );
}

export default App;
