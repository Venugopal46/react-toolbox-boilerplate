import React from 'react';
import {
  Switch, Route, Redirect
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="primary-layout">
        <Switch>
          <Route path="/auth" component />
          <AuthorizedRoute path="/app" component />
          <Redirect to="/auth" />
        </Switch>
      </div>
    );
  }
}

export default App;
