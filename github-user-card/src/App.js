import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";

class App extends React.Component {
  state = {
    userData: [],
    followersData: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/spazdrum")
      .then((res) => {
        this.setState({
          userData: res.data,
        });
        console.log("js: App.js: componentDidMount: Axios ", res.data);
      })
      .catch((err) =>
        console.log("JS: App.js: componentDidMount: catch err ", err)
      );

    axios.get("https://api.github.com/users/spazdrum/followers").then((res) => {
      this.setState({
        followersData: res.data,
      });
      console.log(
        "JS: App.js: componentDidMount: followersData: res ",
        res.data
      );
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div className="allData">
          <UserCard userData={this.state.userData} className="user" />
          <FollowerCard followersData={this.state.followersData} />
        </div>
      </div>
    );
  }
}

export default App;
