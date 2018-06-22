import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theLoader: "loaderOff",
      user: false,
      username: "",
      email: "",
      bio: "",
      password: "",
      emailError: "",
      passwordError: "",
      usernameError: ""
    };

    this.activateLoader = this.activateLoader.bind(this);
  }

  activateLoader = () => {
    this.setState({ theLoader: "loaderOn" });
    console.log("******* the initial state with loader onn");
    console.log(this.state);

    let url = "http://localhost:3000/routes/handlers/users/register";
    axios
      .post(url, {
        username: this.state.username,
        email: this.state.email,
        bio: this.state.bio,
        password: this.state.password
      })

      .then(response => {
       console.log("look here0000000000")
        console.log(response.data.user);
        if(response.data.user===true){
          window.alert("regestration successful!!!!!!!!")
        }
        if(response.data.user===false){
          window.alert("user already exists");
          this.setState({
            theLoader:"loaderOff"
          })
        }
        
        this.setState({
        
          user: response.data.user
        });

        if(response.data.user===true){
          window.alert("regestration successful!!!!!!!!")
        }
        if(response.data.user===false){
          window.alert("user already exists");
          this.setState({
            theLoader:"loaderOff"
          })
        }
        console.log("the state after api req&&&&&&**********");
        console.log(this.state);
        //   Limk to the home page here

        //console.log(response.data.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  emailChangedHandler = event => {
    this.setState({
      email: event.target.value
    });


       console.log(this.state);
  };

  usernameChangedHandler = event => {
    this.setState({
      username: event.target.value
    });
    if (this.state.username.length < 2) {
      this.setState({
        usernameError: "alert alert-danger"
      });
    } else {
      this.setState({
        usernameError: ""
      });
    }
    console.log(this.state);
  };

  bioChangedHandler = event => {
    this.setState({
      bio: event.target.value
    });
    console.log("state after the emailhandler");
    console.log(this.state);
  };

  passwordChangedHandler = event => {
    this.setState({
      password: event.target.value
    });
    if (this.state.password.length < 6) {
      this.setState({
        passwordError: "alert alert-danger"
      });
    } else {
      this.setState({
        passwordError: ""
      });
    }
    console.log(this.state);
  };

  render() {
    let validate;
    if (this.state.emailError === "" && this.state.passwordError === "") {
      validate = (
        <button className="btn btn-primary" onClick={this.activateLoader}>
          Sign up
        </button>
      );
    } else {
      validate = (
        <button
          className="btn btn-primary"
          disabled
          onClick={this.activateLoader}
        >
          Sign up
        </button>
      );
    }
console.log("loffoffgj fsdgasdf sw sgdw eweqfe")
    console.log(this.state.user);

    if (this.state.user===true) {
      return (
        <div>
        
          {window.alert("registered successfully ... .")}
          {this.props.history.push("/")}
        </div>
      );
    }
  
    return (
      <div className="container loginscreen">
        <div className="col-md-12 ">
          <div className="card">
            <div className={this.state.theLoader} />

            <div align="left">
              <h3>
                <b>Sign up</b>
              </h3>

              <h5>Email ID</h5>
              <input
                className={this.state.emailError}
                name="email"
                type="email"
                onChange={this.emailChangedHandler}
              />

              <h5>Username</h5>
              <input
                className={this.state.usernameError}
                name="username"
                type="text"
                onChange={this.usernameChangedHandler}
              />

              <h5>Bio</h5>
              <input name="bio" type="text" onChange={this.bioChangedHandler} />

              <h5>Enter your password</h5>
              <input
                className={this.state.passwordError}
                name="password"
                type="password"
                onChange={this.passwordChangedHandler}
              />

              {validate}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
