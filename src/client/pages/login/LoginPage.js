import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import Button from 'react-toolbox/lib/button';
import * as loginActions from '../../actions/loginActions';
import styles from './loginStyles.pcss';

class LoginPage extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  }

  /* eslint-disable react/destructuring-assignment */
  state = {
    loggedIn: this.props.loggedIn
  }
  /* eslint-enable react/destructuring-assignment */

  componentWillReceiveProps(nextProps) {
    const { loggedIn } = nextProps;

    if (loggedIn) {
      this.setState({
        loggedIn
      });
    }
  }

  login = () => {
    const { actions } = this.props;
    actions.setLoginStatue(true);
  }

  render() {
    const { location } = this.props;
    const { loggedIn } = this.state;
    const { target } = location.state || { target: { pathname: '/app' } };
    if (loggedIn) {
      return <Redirect to={target} />;
    }
    return (
      <div className={styles.loginPage}>
        <Button label="Login" raised primary onClick={this.login} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
