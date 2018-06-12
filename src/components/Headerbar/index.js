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
     
        <div className="designWrapper">
        <div className="container">
            <Link to='/' className="logo-button"><strong>Blogs</strong>around</Link>   
            <Link to='/login' className="login-btn">signin</Link>
            <Link to='/profile' className="profile-btn">Profile</Link> 
    
        </div>
        </div>
    )

}

export default Headerbar;