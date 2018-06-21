import React from "react";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";
import httpClient from "../../HttpCommunicator";
import RaisedButton from "material-ui/RaisedButton";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

export default class Login extends React.Component {
  state = {
    theLoader: "loaderOff",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };

  // on change two way binding of the input fields

  //get the user inputs
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("hhhhh");
    console.log(this.state);
  };

  // validator
  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      passwordError: ""
    };

    if (this.state.password.length < 5) {
      isError = true;
      errors.passwordError = "password needs to be atleast 5 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    // if there is no error
    if (!err) {
      //start the loader
      this.setState({
        theLoader: "loaderOn"
      });
      //call api via http communicator
      //********************************************* */
      const fields = {
        email: this.state.email,
        password: this.state.password
      };

      httpClient.logIn(fields).then(user => {
        // remove the sensitive information from the state
        this.setState({ email: "", password: "" });
        // if the credentials match

        if (user) {
          //Inform the parent to update its state***************!!!!!!!!!!!!
          this.props.onLoginSuccess(user);
          //Turn the loader off
          this.setState({ theLoader: "loaderOff" });
          // REDIRECT programatically to the home after login success
          this.props.history.push("/");
          // turn the loader off
        } else {
          window.alert("Error Occured or the fields didnot match");
          console.log("Error Occured or the fields didnot match");
          this.setState({ theLoader: "loaderOff" });
        }
      });
    }
    //********************************************* */
  };

  render() {
    return (
      <div className="container loginscreen">
        <div className="col-md-12 ">
          <div className={this.state.theLoader} />
          <div className="card padder-35">
            <div align="left">
              <Typography variant="display2" gutterBottom>
                Sign in
              </Typography>
              <Typography variant="headline" gutterBottom>
                with <b className="logo-button">Blogs</b>around account
              </Typography>
              <form className="login-form">
                <TextField
                  hintText="Email"
                  name="email"
                  floatingLabelText="Email"
                  value={this.state.email}
                  onChange={e => this.change(e)}
                  errorText={this.state.emailError}
                  floatingLabelFixed
                />
                <br />
                <TextField
                  name="password"
                  hintText="password"
                  floatingLabelText="Password"
                  value={this.state.password}
                  onChange={e => this.change(e)}
                  errorText={this.state.passwordError}
                  type="password"
                  floatingLabelFixed
                />
                <br />
                <RaisedButton
                  label="Submit"
                  onClick={e => this.onSubmit(e)}
                  primary
                />
                  <span className="forgotpswdLink">
                <Link to="/forgotpassword">Forgot password</Link>
              </span>
              </form>
              <div className="registerLink">
                <Link to="/register">
                  <Typography variant="headline" gutterBottom>
                    Sign up
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
