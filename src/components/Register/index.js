import React from "react";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";
import httpClient from "../../HttpCommunicator";
import RaisedButton from "material-ui/RaisedButton";
import {Typography,Button} from "@material-ui/core";
import "./styles.css";
import Paper from '@material-ui/core/Paper';

export default class Login extends React.Component {
  state = {
    theLoader: "loaderOff",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    username:"",
    usernameError:"",
    bio:"",
    bioError:"",
    confirmPassword:"",
    confirmPasswordError:""

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
    //error object
    const errors = {
      emailError: "",
      passwordError: "",
      usernameError:"",
      bioError:"",
      confirmPasswordError:""
    };
//password validation
    if (this.state.password.length < 5) {
      isError = true;
      errors.passwordError = "password needs to be atleast 5 characters long";
    }

//confirm password validation    
let retrivedPassword= this.state.password;
let conretrivedpassword=this.state.confirmPassword;

    if (retrivedPassword!==conretrivedpassword) {
      isError = true;
      errors.confirmPasswordError = "password did not match";
    }
//email validation
    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }
//username validation
    if(this.state.username.length<3){
      isError = true;
      errors.usernameError = "username should at least 3 characters long"
    }
//bio validation
    if(this.state.bio.length<1){
      isError = true;
      errors.bioError = "this field cannot be empty"
    }


    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };
reset=()=>{
  this.setState(
    {
     
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      username:"",
      usernameError:"",
      bio:"",
      bioError:"",
      confirmPassword:"",
      confirmPasswordError:""
  
    }
  )
}
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
        password: this.state.password,
        username: this.state.username,
        bio: this.state.bio

      };

      httpClient.register(fields).then(user => {
        // remove the sensitive information from the state
        this.setState({ email: "", password: "",confirmPassword:"" });
        // if the credentials match

        if (user===true) {
    
      
          //Turn the loader off
          this.setState({ theLoader: "loaderOff" });
          // REDIRECT programatically to the login after registration success
          this.props.history.push("/login");
          window.alert("Sucessfully registered plesase login to get started")
          // turn the loader off
        } else {
          window.alert("Email id is already registered");
          console.log("Error Occured network communication error or backend down");
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

      <Paper  elevation={8}>
          <div className="card padder-35">
            <div align="left">
              <Typography variant="display2" gutterBottom>
                Sign up
              </Typography>
            
              <form className="login-form">

                <TextField
                  className="width100p"
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
                  className="width100p"
                  hintText="Username"
                  name="username"
                  floatingLabelText="Username"
                  value={this.state.username
                  }
                  onChange={e => this.change(e)}
                  errorText={this.state.usernameError}
                  floatingLabelFixed
                />
                <br />
                <TextField
                  className="width100p"
                  hintText="Bio"
                  name="bio"
                  floatingLabelText="Bio"
                  value={this.state.bio}
                  onChange={e => this.change(e)}
                  errorText={this.state.bioError}
                  floatingLabelFixed
                />
                <br />
                <TextField
                className="width100p"
                  name="password"
                  hintText="Password"
                  floatingLabelText="Password"
                  value={this.state.password}
                  onChange={e => this.change(e)}
                  errorText={this.state.passwordError}
                  type="password"
                  floatingLabelFixed
                />

                 <TextField
                className="width100p"
                  name="confirmPassword"
                  hintText="Re-enter password"
                  floatingLabelText="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={e => this.change(e)}
                  errorText={this.state.confirmPasswordError}
                  type="password"
                  floatingLabelFixed
                />

                <br />
                <RaisedButton
                  label="Submit"
                  onClick={e => this.onSubmit(e)}
                  primary
                />


 <Button className="reset-button" color="secondary" onClick={this.reset}>
        Reset
      </Button>

               
            
              </form>
              
            </div>
          </div>

  </Paper>
        </div>
      </div>
   
              
  );  





  }
}
