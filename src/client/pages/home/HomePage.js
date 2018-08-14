import React from 'react';
import { Link } from 'react-router-dom';
import styles from './homeStyles.pcss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.homePage}>
        <h1>Public Page</h1>
        <Link to="/login">Go to login page</Link>
      </div>
    );
  }
}

export default HomePage;
