import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + " Child Constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " Child ComponentDidMount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    const increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    console.log(this.props.name + " Child Render");

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increase Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ShankhaD</h4>
      </div>
    );
  }
}

export default UserClass;