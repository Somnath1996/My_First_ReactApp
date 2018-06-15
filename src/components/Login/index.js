import React, { Component } from 'react';
import httpClient from '../../HttpCommunicator'
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
email: '',
password: '',
theLoader:"loaderOff",
};


// bind  on button submit 
    this.activateLoader = this.activateLoader.bind(this);}
  


   activateLoader=()=> {
    


    this.setState({theLoader:"loaderOn"})
console.log("*******Loader has been turned onn");
console.log(this.state)
 //POST email and pasword to the backend   
 const fields ={
     email:this.state.email,
     password:this.state.password
                }
                httpClient.logIn(fields).then(user => {
    // remove the sensitive information from the state
    this.setState({  email: '', password: ''  })
    // if the credentials match
    if(user) {
        //Inform the parent to update its state***************!!!!!!!!!!!!
       this.props.onLoginSuccess(user)
        //Turn the loader off
        this.setState( {theLoader:"loaderOff"})
        // REDIRECT programatically to the home after login success
        this.props.history.push('/')
    // turn the loader off
    }
    else{
        window.alert("Error Occured or the fields didnot match")
        console.log("Error Occured or the fields didnot match")
        this.setState( {theLoader:"loaderOff"})
    }

})
    

   }


//***********-------------------change Handlers */
    
   emailChangedHandler = (event) => {
        this.setState({
            email:event.target.value})
          console.log(this.state)
  }
  




   passwordChangedHandler = (event) => {
        this.setState(  {
        password:event.target.value} )
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

