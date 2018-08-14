import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as loginActions from '../../actions/loginActions';

class LogoutPage extends React.Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.setLoginStatue(false);
  }

  render() {
    return <Redirect to="/login" />;
  }
}

LogoutPage.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch)
});

export default connect(null, mapDispatchToProps)(LogoutPage);
