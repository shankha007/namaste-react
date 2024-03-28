import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="jsxHeading" className="head">
    Namaste React using JSX 🚀
  </h1>
);

// React Component
// Class based Component -> OLD
// Functional Component -> NEW

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
