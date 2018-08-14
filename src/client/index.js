/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import AuthorizedRoute from './AuthorizedRoute';
import App from './pages/App';
import LoginPage from './pages/login/LoginPage';
import LogoutPage from './pages/logout/LogoutPage';
import store from './store/configureStore';
import FourOhFour from './pages/FourOhFour';
import HomePage from './pages/home/HomePage';

const root = document.getElementById('app');
const renderApp = () => {
  render(
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />
            <AuthorizedRoute path="/app" component={App} />
            <Route component={FourOhFour} />
          </Switch>
        </BrowserRouter>
      </AppContainer>
    </Provider>,
    root
  );
};

renderApp();

// Hot module reloading
if (module.hot) {
  module.hot.accept('./pages/App', renderApp);
}
