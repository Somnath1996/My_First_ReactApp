import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
   let sdf="\"evryday frjfbcks dfne kfnfkshfvenc df cejdf vje ixenf eifdewfh  efe erjf xefjons fwjfneijf eisf eivf ei j"
    this.state = {
      
    };
  }
  
  render() {

    let inputName="email";
    let title="Sign in";
    let userAction="Enter your Email ID";
    let buttonText="Next";
    let theLoader="loaderOff";


    if(this.props.emailCheck){
        inputName="password";
        title="Welcome";
        userAction="Enter your Password";
        buttonText="Login";
       React.forceUpdate();
    }
   
    function activateLoader(e) {
        e.preventDefault();
        theLoader="loaderOn"
        console.log(theLoader);
      }
    return (
      
        <div className="container loginscreen">
            <div className="col-md-12 " >
                <div className="card">
                    <div className={theLoader}></div>
                        
                    
                <div align="left" >
            <div className="branding">Blogging</div>
                            <h3><b>{title}</b></h3> 
                            <h5><b>{this.props.email?this.props.email:""}</b></h5>
                            <h5>{userAction}</h5>
                            <input name={inputName} type={inputName}/>
                            <button className="btn btn-primary" onClick={activateLoader}>{buttonText}</button>
                                    </div>
                            </div>
                    </div>
            </div> 

      
    );
  }
}

export default App;      



















import React from 'react';

let inputName="email";
let title="Sign in";
let userAction="Enter your Email ID";
let buttonText="Next";
let theLoader="loaderOff";


const LoginLogout = (props) => {
    
    
    if(props.emailCheck){
        inputName="password";
        title="Welcome";
        userAction="Enter your Password";
        buttonText="Login";
       React.forceUpdate();
    }

    function activateLoader(e) {
        e.preventDefault();
        theLoader="loaderOn"
        console.log(theLoader);
      }

    return (
        <div className="container loginscreen">
            <div className="col-md-12 " >
                <div className="card">
                    <div className={theLoader}></div>
                        
                    
<div align="left" >
<div className="branding">Blogging</div>
                            <h3><b>{title}</b></h3> 
                            <h5><b>{props.email?props.email:""}</b></h5>
                            <h5>{userAction}</h5>
                            <input name={inputName} type={inputName}/>
                            <button className="btn btn-primary" onClick={activateLoader}>{buttonText}</button>
</div>
                            </div>
                    </div>
            </div> 
        )
}

export default LoginLogout;