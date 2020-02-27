import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from './components/InputFields';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DisplayPerformanceData from './components/DisplayPerformanceData';
import { authenticate } from './modules/auth';
import { register } from './modules/register';
import './App.css';


class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    renderRegisterForm: false,
    registered: false,
    authenticated: false,
    message: "",
    errorMessage: "",
    entrySaved: false,
    renderIndex: false
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: "Something went wrong! :()"});
    }
  };

  onRegister = async e => {
    e.preventDefault();
    const response = await register(
      e.target.email.value,
      e.target.password.value,
      e.target.password_confirmation.value
    );
    if (response.registered) {
      this.setState({ registered: true });
      this.setState({ message: "Your user was created! :D"});
      console.log(response)
    } else {
      // this.setState({ message: response.message });
      this.setState({ message: "Something went wrong! :("});
      console.log(response)
    }
  };

  render() {
    const { renderLoginForm, renderRegisterForm, authenticated, message, registered } = this.state;
    let renderBackButton;
    let renderLogin;
    let renderRegister;
    let renderErrorMessage;
    let performanceDataIndex;

    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case renderRegisterForm && !authenticated:
        renderLogin = <RegisterForm submitFormHandler={this.onRegister} />;
        break; 
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >Login</button>
            <button
              id="register"
              onClick={() => this.setState({ renderRegisterForm: true })}
            >Register</button>
          </>
        );
        break;
      case authenticated:
        renderLogin = (<p id="message">Hi {JSON.parse(sessionStorage.getItem("credentials")).uid} ;D</p>);
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
            </>
          )
        } else {
          performanceDataIndex = (
            <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
          )
        }
        break;
    }

    if(renderLoginForm || renderRegisterForm){
      renderBackButton = (
        <>
          <button id="backButton" onClick={() => this.setState({ renderRegisterForm: false, renderLoginForm: false, message: "" })}>Back</button>
        </>
      );}

    if(registered || message){
      renderErrorMessage = (
        <>
          <p id="message">{message}</p>
        </>
      )
    }

    return (
      <>
      <InputFields onChangeHandler={this.onChangeHandler} />
        {renderBackButton}
        {renderLogin}
        {renderRegister}
        {renderErrorMessage}
        <DisplayCooperResult
        distance={this.state.distance}
        gender={this.state.gender}
        age={this.state.age}
        authenticated={this.state.authenticated}
        entrySaved={this.state.entrySaved}
        entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
      />
        {performanceDataIndex}
      </>
    );
  }
}

export default App;