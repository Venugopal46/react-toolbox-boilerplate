import React from 'react';
import styles from './homeStyles.pcss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.homePage}>
        Protected Home page
      </div>
    );
  }
}

export default HomePage;
