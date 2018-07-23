import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';
import Posts from './posts/Posts';
import ProtectedHome from './home/ProtectedHome';

class App extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="primary-layout">
        <h1>Protected Page</h1>
        <Link to={`${match.url}/posts`}>Open posts</Link><br /><br />
        <Switch>
          <Route path={`${match.url}`} component={ProtectedHome} exact />
          <Route path={`${match.url}/posts`} component={Posts} />
        </Switch>
        <Link to="/logout"><Button label="Logout" raised /></Link>
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired
};

export default App;
