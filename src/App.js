// Brian
// technologies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// documents
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// pages/routes
import Home from './components/pages/Home';
// import Services from './components/pages/Services';
// import About from './components/pages/About';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
