import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './pages/App';
import HomePage from './pages/home/HomePage';


export default (
  <Route path="/" component={App}>
    <IndexRedirect to="home" />
    <Route path="home" component={HomePage} />
  </Route>
);
