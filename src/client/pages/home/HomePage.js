import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-toolbox/lib/button';
import * as postActions from '../../actions/postActions';
import styles from './homeStyles.pcss';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getPost = this.getPost.bind(this);
  }

  getPost() {
    const { actions } = this.props;
    actions.getPost();
  }

  render() {
    const { post } = this.props;
    return (
      <div className={styles.homePage}>
        <Button label="Get Post" raised primary onClick={this.getPost} />
        <p>
          Post Title:
          {post.title}
        </p>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  post: PropTypes.object
};

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
