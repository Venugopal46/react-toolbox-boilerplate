import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-toolbox/lib/button';
import * as userActions from '../../actions/userActions';
import styles from './usersStyles.pcss';

class Users extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    const { actions } = this.props;
    actions.getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className={styles.posts}>
        <Button label="Get Users" raised primary onClick={this.getUsers} />
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
