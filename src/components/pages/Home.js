// CTRL
import React from 'react';

import '../../App.css';

import Navbar from '../Navbar';
import Hero from '../Hero';
import Cards from '../Cards';
import Services from '../Services';
import About from '../About';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Services />
      <About />
    </>
  );
}

export default Home;
