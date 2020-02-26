import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from './components/InputFields';

import './App.css';


class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <InputFields onChangeHandler={this.onChangeHandler} />
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
        />
      </>
    );
  }
}

export default App;