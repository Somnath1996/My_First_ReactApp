import React, { Component } from 'react';
import axios from 'axios'
import Result from '../Register/Result'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
class Login extends Component {

  constructor(props) {
    super(props);
  

    this.state = {
theLoader:"loaderOff",
user:false,
email:null,
password:null,
Auth:{
    uid:null,
    username:null,
    bio:null,
    token:null,

}
        
        };


    this.activateLoader = this.activateLoader.bind(this);
  }
  

   activateLoader=()=> {
    
    this.setState(
        {theLoader:"loaderOn"})
console.log("*******");
console.log(this.state)
    
    
    let url = 'http://localhost:3000/routes/handlers/users/login';
    axios.post(url, {
        email:this.state.email,
        password:this.state.password
      })
      .then((response)=> {

console.log(response.data.user);
if(response.data.user==true)
{
    console.log(response.data.user);
    console.log("the user is legit")
        this.setState(
      {
         theLoader:"loaderOff",
          user:response.data.user,
          email:this.state.email,
          Auth:{
            uid:response.data.userdetails.uid,
            username:response.data.userdetails.username,
            bio:response.data.userdetails.bio,
            token:response.data.userdetails.token,
        
        }
            }
)

      }

else {
    console.log("the user is not legit")
    window.alert("The username or password did not match")
    this.setState({
        theLoader:"loaderOff"
    })
}
console.log("the state after api req&&&&&&**********")
console.log(this.state)
//   Limk to the home page here


//console.log(response.data.user);
      })
      .catch((error)=> {
          this.setState(
              {
                  theLoader:"loaderOff"
              }
          )
        console.log(error);
      });

   }


   emailChangedHandler = (event) => {


    //const persons = [...this.state.persons];
    //persons[personIndex] = person;

    //this.setState( {persons: persons} );

    this.setState( {
 email:event.target.value} )
        console.log("state after the emailhandler")
    console.log(this.state)
  }
  




  passwordChangedHandler = (event) => {
    this.setState( 
        {
password:event.target.value
    } )
    console.log(this.state)
  }  

  render() {

    let inputName="email";
    let title="Sign in";
    let userAction="Enter your Email ID";
    let buttonText="Next";
 


    if(this.state.user===true){
        console.log(this.state)
        inputName="password";
        title="Welcome";
        userAction="Enter your Password";
        buttonText="Login";
    }
   
    if (this.state.user) {
        return (
        <Router>
            <div>
             <Route path='/result' component={Result} />
        <Redirect to='/result'/>
            </div>
        </Router>
        )
      }
    return (
      
        <div className="container loginscreen">
            <div className="col-md-12 " >
            <div className={this.state.theLoader}></div>
                <div className="card">
                  
                        
                    
                <div align="left" >
           
                            <h3><b>Login</b></h3> 
                    
                            <h5>Enter your email ID</h5>
                            <input name="email" type="email" onChange={this.emailChangedHandler}/>

                             <h5>Enter your password</h5>
                            <input name="email" type="password" onChange={this.passwordChangedHandler}/>
                            
                            
                            <button className="btn btn-primary" onClick={this.activateLoader}>{buttonText}</button>
                            <span className="forgotpswdLink">
                                    <Link to='/forgotpassword' >Forgot password</Link>
                                    </span>
                                    
                            <div className="registerLink">
                                    <Link to='/register' >Create account</Link>
                                    
                                    </div>
                                    
                            </div>
                            </div>
                    </div>
            </div> 

      
    );
  }
}

export default Login;      

