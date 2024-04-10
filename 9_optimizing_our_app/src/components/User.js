import React, { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @ShankhaD</h4>
    </div>
  );
};

export default User;
