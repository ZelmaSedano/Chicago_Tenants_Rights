// Brian
import React from 'react';

import '../../App.css';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Cards from '../Cards';
import About from '../About';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Footer />
    </>
  );
}

export default Home;
