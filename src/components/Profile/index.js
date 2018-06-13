import React, { Component } from 'react';
import axios from 'axios'
import Footer from '../ShortFooter'
import './pstyle.css';
import some from '../Carousel/images/profilesideimage.jpg'
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";

  class Profile extends Component {

  constructor(props) {
    super(props);
  

    this.state = {
            bio:null,
            blogsCount:null,
            auth:{
                uid : this.props.uid,
                token : this.props.token
            }
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
  




  componentWillMount() {
    window.scrollTo(0,0);
  }

  render() {
    

   
    return (
      
        <div className="container profiler">
            <div className="row myborder" >
                <div className="col-md-6" align="left">

                 <h1 className="font56">{this.props.username}</h1>
                <p className="font15">{this.props.date}| {(this.state.blogsCount) ? this.state.blogsCount:"counting"} blogs</p>
                <hr/>
                <h4>Bio</h4>
                <p> {this.state.bio}</p>
                </div>


                <div className="col-md-6">
                    <div className="profile-header">
                        <img className="profile-image " src={some} alt="blog-view1" />
                        <div className="name-placement">
                            <h2 className="blog-title"><b>Blogs</b>around</h2>
                        </div>
                    </div>
                  

                </div>
             
            </div>
            <Footer/>
        </div> 

      
    );

   
      
    
  }
}

export default Profile;      

