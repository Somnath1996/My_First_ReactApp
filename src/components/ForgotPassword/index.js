import React, { Component } from "react";
import axios from "axios";
import TextField from "material-ui/TextField";
import httpClient from "../../HttpCommunicator";
import RaisedButton from "material-ui/RaisedButton";
import Typography from "@material-ui/core/Typography";
import "./pstyle.css";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theLoader: "loaderOff",
      pCreate: false,
      email: "",
      emailError: ""
    };
    this.activateLoader = this.activateLoader.bind(this);
  }

  activateLoader = () => {
    this.setState({ theLoader: "loaderOn" });
    console.log("*******");
    console.log(this.state);

    let url =
      "http://localhost:3000/routes/handlers/users/forgotPassword/create";
    axios
      .post(url, {
        email: this.state.email
      })
      .then(response => {
        console.log(response.data.pCreate);
        if (response.data.pCreate === true) {
          console.log(response.data.pCreate);
          console.log("Random password genration sucessful");

          this.setState({
            theLoader: "loaderOff",
            email: this.state.email,
            pCreate: true
          });
          window.alert("Random password genrated");
        } else {
          console.log(
            "user has already genrated random password or entered wrong email "
          );
          window.alert(
            "You have already genrated random password or entered wrong email!!!! "
          );
          this.setState({
            theLoader: "loaderOff"
          });
        }
        console.log("the state after api req&&&&&&**********");
        console.log(this.state);
        //   Limk to moderator home page here

        //console.log(response.data.user);
      })
      .catch(error => {
        this.setState({
          theLoader: "loaderOff"
        });
        console.log(error);
      });
  };

  emailChangedHandler = event => {
    this.setState({
      email: event.target.value
    });

    
    console.log("state after the emailhandler");
    console.log(this.state);
  };

  render() {
   
  

    if (this.state.pCreate === true) {
      return (
        <Router>
          <div>
            <Redirect to="/result" />
          </div>
        </Router>
      );
    }

    return (
      <div className="container loginscreen">
        <div className="col-md-12 ">
          <div className={this.state.theLoader} />
          <div className="card padder-35">
            <div align="left">
              <Typography variant="display2" gutterBottom>
                Forgot Password
              </Typography>

              <Typography variant="headline" gutterBottom>
                A Random phrase will be sent to your registered emailid
              </Typography>
              <form className="login-form"> 


                 <TextField
                  hintText="Email"
                  name="email"
                  floatingLabelText="Email"
                  value={this.state.email}
                  onChange={this.emailChangedHandler}
                  errorText={this.state.emailError}
                  floatingLabelFixed
                />
                <div>
                <RaisedButton
                  label="Send"
                  onClick={this.activateLoader}
                  primary
                />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
