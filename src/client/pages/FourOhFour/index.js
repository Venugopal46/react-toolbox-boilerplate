import React, { Component } from 'react';
import styles from './styles.pcss';

class FourOhFour extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>404</h1>
        <p>Uh oh! Are you sure you wanted to go here?</p>
      </div>
    );
  }
}

export default FourOhFour;
