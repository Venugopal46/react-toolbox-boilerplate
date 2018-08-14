import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-toolbox/lib/button';
import * as postActions from '../../actions/postActions';
import styles from './postsStyles.pcss';

class Posts extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getPosts = this.getPosts.bind(this);
  }

  getPosts() {
    const { actions } = this.props;
    actions.getPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className={styles.posts}>
        <Button label="Get Posts" raised primary onClick={this.getPosts} />
        <ul>
          {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    );
  }
}

Posts.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
