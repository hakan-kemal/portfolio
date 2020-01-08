import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <Router>
    <Portfolio />
  </Router>,
  document.getElementById('root')
);
