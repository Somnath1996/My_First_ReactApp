import React, { Component } from 'react';
import axios from 'axios'
import './pstyle.css';
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
class ForgotPassword extends Component {

  constructor(props) {
    super(props);
  

    this.state = {
theLoader:"loaderOff",
pCreate:false,
email:null,
 };
    this.activateLoader = this.activateLoader.bind(this);
  }
  

   activateLoader=()=> {
    
    this.setState(
        {theLoader:"loaderOn"})
console.log("*******");
console.log(this.state)
    
    
    let url = 'http://localhost:3000/routes/handlers/users/forgotPassword/create';
    axios.post(url, {
        email:this.state.email,
      })
      .then((response)=> {

console.log(response.data.pCreate);
if(response.data.pCreate==true)
{
    console.log(response.data.pCreate);
    console.log("Random password genration sucessful")    
    this.setState(
      {
         theLoader:"loaderOff",
          email:this.state.email,
          pCreate:true
      }
)

      }

else {
    console.log("user has already genrated random password or entered wrong email ")
    window.alert("You have already genrated random password or entered wrong email!!!! ")
    this.setState({
        theLoader:"loaderOff"
    })
}
console.log("the state after api req&&&&&&**********")
console.log(this.state)
//   Limk to moderator home page here


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

    this.setState( {
 email:event.target.value} )
        console.log("state after the emailhandler")
    console.log(this.state)
  }
  




  

  render() {
    

      if (this.state.pCreate===true) {
   
        return (
            <Router>
                <div>
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
           
                            <h3><b>Forgot Password</b></h3> 
                    
                       
                            <p className="Forgot-password-message">A Random phrase will be sent to your registered emailid </p>
                            <h5>Enter your email ID</h5>
                            <input name="email" type="email" onChange={this.emailChangedHandler}/>
                            <button className="btn btn-primary" onClick={this.activateLoader}>send</button>   
                            </div>
                            </div>
                    </div>
            </div> 

      
    );

   
      
    
  }
}

export default ForgotPassword;      

