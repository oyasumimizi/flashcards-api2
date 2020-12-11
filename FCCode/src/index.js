import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();





const jsxElement = <h1>Flash cards App</h1>;
console.log(jsxElement);

ReactDOM.render(jsxElement, document.getElementById("root"));

