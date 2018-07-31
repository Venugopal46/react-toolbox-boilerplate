import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';
import Posts from './posts/Posts';
import Users from './users/Users';
import ProtectedHome from './home/ProtectedHome';

class App extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="primary-layout">
        <h1>Protected Page</h1>
        <Link to="/logout"><Button label="Logout" raised /></Link><br /><br />
        <NavLink to={`${match.url}/posts`}>Posts</NavLink> | <NavLink to={`${match.url}/users`}>Users</NavLink><br /><br />
        <Switch>
          <Route path={`${match.url}`} component={ProtectedHome} exact />
          <Route path={`${match.url}/posts`} component={Posts} />
          <Route path={`${match.url}/users`} component={Users} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired
};

export default App;
