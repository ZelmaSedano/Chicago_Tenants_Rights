// Brian
// technologies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// documents

import Footer from './components/Footer';
import './App.css';

// pages/routes
import Home from './components/pages/Home';
// import Services from './components/pages/Services';
// import About from './components/pages/About';
import RLTO from './components/pages/RLTO';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      {/* This is the React Router Routing */}
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rlto' exact component={RLTO} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
