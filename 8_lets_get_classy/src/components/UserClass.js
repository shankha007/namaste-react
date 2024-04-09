import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.name + " Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "Dummy",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/shankha007");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log(this.props.name + " Child Render");
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="Profile Photo" height="200" width="200" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{login}</h4>
      </div>
    );
  }
}

export default UserClass;
