import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => render => HTMLElement

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

// JSX = is not HTML in JS, it is HTML-like or XML-like
const jsxHeading = (
  <h1 id="jsxHeading" className="head">
    Namaste React using JSX 🚀
  </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
