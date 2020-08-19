import React from 'react';
import logo from './assets/sample.png';

import styles from './App.css';
function App() {
    return (
      <>
        <div className={styles.home}>
          <h1>Still development</h1>

          <img className={styles.imgV} src={logo} alt="test" />
        </div>
      </>
    );
}
export default App;
