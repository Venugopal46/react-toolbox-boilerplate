import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, loggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (loggedIn ? <Component {...props} /> : (
          <Redirect to={{
            pathname: '/login',
            state: { target: props.location }
          }}
          />
        ))}
      />
    );
  }
}

AuthorizedRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(AuthorizedRoute);
