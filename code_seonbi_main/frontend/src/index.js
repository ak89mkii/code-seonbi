import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// Used to work as standard frontend React app.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   // React Standard Render id.
//   // document.getElementById('altRoot')
// );

// Used to work with Django REST Framework.
const altRootDiv = document.getElementById('atlRoot');
  render(<App />, altRootDiv);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

