import React, { Component } from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import Result from './Result';
  
class Register extends Component {

  constructor(props) {
    super(props);
  

    this.state = {

theLoader:"loaderOff",
user:false,
username:null,
email:null,
bio:null,
password:null
   };


    this.activateLoader = this.activateLoader.bind(this);
  }
  

   activateLoader=()=> {
    
    this.setState(
        {theLoader:"loaderOn"})
console.log("******* the initial state with loader onn");
console.log(this.state)
    
    
    let url = 'http://localhost:3000/routes/handlers/users/register';
    axios.post(url, {
        username:this.state.username,
        email:this.state.email,
        bio:this.state.bio,
        password:this.state.password,
        
      })
      .then((response)=> {

console.log(response.data.user);
        this.setState(
      {
         user:response.data.user,
             
                    }
)
console.log("the state after api req&&&&&&**********")
console.log(this.state)
//   Limk to the home page here


//console.log(response.data.user);
      })
      .catch((error)=> {
        console.log(error);
      });

   }


   emailChangedHandler = (event) => {

    this.setState( {
 email:event.target.value} )
        console.log("state after the emailhandler")
    console.log(this.state)
  }
  
  usernameChangedHandler = (event) => {

    this.setState( {
 username:event.target.value} )
  console.log(this.state)
  }

  bioChangedHandler = (event) => {

    this.setState( {
 bio:event.target.value} )
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
                <div className="card">
                    <div className={this.state.theLoader}></div>
                        
                    
                <div align="left" >
           
                            <h3><b>Register</b></h3> 
                    
                            <h5>email ID</h5>
                            <input name="email" type="email" onChange={this.emailChangedHandler}/>

                            <h5>username</h5>
                            <input name="username" type="text" onChange={this.usernameChangedHandler}/>

                              <h5>bio</h5>
                            <input name="bio" type="text" onChange={this.bioChangedHandler}/>


                             <h5>Enter your password</h5>
                            <input name="email" type="password" onChange={this.passwordChangedHandler}/>
                            
                            
                            <button className="btn btn-primary" onClick={this.activateLoader}>Register</button>
                                    </div>
                            </div>
                    </div>
            </div> 
      

    );
  }


  
}

export default Register      

