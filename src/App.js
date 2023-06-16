import React from 'react';
import "./App.css";
import Navbar from './components/navbar';
import Intro from './components/intro';
import Stats from './components/stats';
import Imgs_overlapped from './components/imgs_overlapped';
import Dashboard from './components/dashboard';
import Arc_shape from './components/arc_shape';
import Simple_text from './components/simple_text';
import News from './components/news';
import Second_last from './components/second_last';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Stats />
      <Imgs_overlapped />
      <Dashboard />
      <Arc_shape />
      <Simple_text />
      <News />
      <Second_last />
      <Footer />
    </div>
  );
}

export default App;
