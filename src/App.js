import React from 'react';
import './App.css';
import Navbar from './components/NavbarComp';
import Intro from './components/IntroComp';
import Stats from './components/StatisticsComp';
import ImgsOverlapped from './components/ImgsOverlappedComp';
import Dashboard from './components/DashboardComp';
import ArcShape from './components/ArcShapeComp';
import SimpleText from './components/SimpletextComp';
import News from './components/NewsComp';
import SecondLast from './components/SecondlastComp';
import Footer from './components/FooterComp';

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
