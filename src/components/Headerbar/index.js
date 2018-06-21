import React from 'react';
import './styles.css'
import {
    Link,
    } from "react-router-dom";



let status ="";

    
const Headerbar = (props) => {
    if (props.currentUser) {
        status= (<span>
               <Link to='/logout' className="login-btn">Logout</Link>
                <Link to='/profile' className="profile-btn">Profile</Link>  
                <Link to='/write' className="profile-btn">write</Link>  
        </span>)   
     }
     else{ status=(<Link to='/login' className="login-btn">Login</Link>)}

    return (
     
        <div className="designWrapper ">
        <div className="container">
        <Link to='/' className="logo-button"><strong>Blogs</strong>around</Link> 
        {status}
              
    
         
              </div>
        </div>
    )

}

export default Headerbar;