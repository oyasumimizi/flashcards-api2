import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import './index.css';



const jsxElement = <h1>Flash cards App</h1>;
console.log(jsxElement);

ReactDOM.render(<App/>,document.getElementById("root"));
