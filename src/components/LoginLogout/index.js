import React, { Component } from 'react';
import axios from 'axios'
class LoginLogout extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
    
    pageset :    {
            theLoader:"loaderOff"
    },
    userStatus:{
        user:false,
        email:null
        
    }
     
  
    };
    this.activateLoader = this.activateLoader.bind(this);
  }
  

   activateLoader=()=> {
    
    this.setState({pageset:
        {theLoader:"loaderOn"}
    }
    )

    
    
    let url = 'http://localhost:3000/routes/handlers/users/emailcheck';
    axios.post(url, {
        email:this.state.userStatus.email
        
      })
      .then((response)=> {
this.setState(
      {pageset:
            {
                theLoader:"loaderOff"
            },
            userStatus:{
                user:response.data.user,
                email:this.state.userStatus.email
            }

        
        
      })
        console.log(response.data.user);
      })
      .catch((error)=> {
        console.log(error);
      });

   }


   nameChangedHandler = (event) => {
    this.setState( {
    userStatus: {
user:false,
email:event.target.value
    }} )
  }
    
  render() {

    let inputName="email";
    let title="Sign in";
    let userAction="Enter your Email ID";
    let buttonText="Next";
 


    if(this.state.userStatus.user===true){
        console.log(this.state)
        inputName="password";
        title="Welcome";
        userAction="Enter your Password";
        buttonText="Login";
    }
   
   
    return (
      
        <div className="container loginscreen">
            <div className="col-md-12 " >
                <div className="card">
                    <div className={this.state.pageset.theLoader}></div>
                        
                    
                <div align="left" >
           
                            <h3><b>{title}</b></h3> 
                            <h5><b>{this.props.email?this.props.email:""}</b></h5>
                            <h5>{userAction}</h5>
                            <input name={inputName} type={inputName} onChange={this.nameChangedHandler}/>
                            <button className="btn btn-primary" onClick={this.activateLoader}>{buttonText}</button>
                                    </div>
                            </div>
                    </div>
            </div> 

      
    );
  }
}

export default LoginLogout;      

