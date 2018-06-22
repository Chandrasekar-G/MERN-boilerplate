import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await fetch("/api/users");
    const users = await res.json();
    console.log(users);
    this.setState({users});
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {users.map(user => <div key={user.name} className="users">{user.name}</div>)}
      </div>
    );
  }
}

export default App;
