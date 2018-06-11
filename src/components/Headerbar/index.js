import React from 'react';
import './styles.css'
import {
    BrowserRouter as Router,
    Link,
    } from "react-router-dom";

let loginState ;



const Headerbar = (props) => {
 
if(props.authStatus){
    loginState="signout";
}else{loginState="signin"}

    return (
        <Router>
         <div >
        
        <div className="container designWrapper">
            <strong>Blogs</strong>around    
            <Link to='/loginState' className="login-btn">{loginState}</Link>
        </div>
        </div>        
       
        </Router>
    )

}

export default Headerbar;