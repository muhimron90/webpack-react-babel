import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// const title = 'Webpack bundled JavaScript Project';
// <App title={title} />;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

module.hot.accept();
