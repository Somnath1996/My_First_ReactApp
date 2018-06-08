import React from 'react';
import './styles.css'

let loginState ;



const Headerbar = (props) => {
 
if(props.authStatus){
    loginState="signout";
}else{loginState="signin"}

    return (
         <div >
        {/* <div className="headerwrapper" >
        {loginState}
        </div > */}
        <div className="designWrapper">
        
            <strong>The Blog</strong>
            
        </div>        
        </div>
    )

}

export default Headerbar;