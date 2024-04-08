import React from "react";

import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Webseries!</h2>
        <UserClass name="Shankha Shubhra (class)" location="Kolkata (class)" />
        <UserClass name="Akshay Saini (class)" location="Dehradun (class)" />
      </div>
    );
  }
}

export default About;
