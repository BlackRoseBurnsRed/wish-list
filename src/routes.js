import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/Home/Home'
import About from './components/About/About.js';
import NotFound from './components/NotFound/NotFound.js';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;