import React, { Component } from 'react';
import axios from 'axios'
import Footer from '../Footerbar'
import './bstyle.css';
import some from '../Carousel/images/two.jpg'
import {
    BrowserRouter as Router,
    Link,
    Redirect
  } from "react-router-dom";
class BlogView extends Component {

  constructor(props) {
    super(props);
  

    this.state = {
theLoader:"loaderOff"
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
      
        <div className="container">
            <div className="row" >
                <div className="col-md-12">
                    <div className={this.state.theLoader}></div>
                    <div className="blog-header">
                        <img className="blog-image " src={some} alt="blog-view1" />
                        <div className="backdrop">
                            <h2 className="blog-title">Lorem Ipsum</h2>
                        </div>
                    </div>
                    <div align="left">
                        <h4 className="font36">Lorem ipsum</h4>
                        <h6> <b>John Doe | may-15-2018</b> </h6>
                        <p className="font24">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</p>

                        <p className ="font20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo ante. Integer urna odio, tincidunt quis erat in, porta egestas arcu. Vivamus non nunc quis tellus varius accumsan ac sit amet eros. Aenean vehicula eros tincidunt ultricies porta. Pellentesque vel tellus accumsan, venenatis lacus vel, semper odio. Sed ut elit porttitor arcu dignissim finibus. Etiam lobortis tincidunt magna, at blandit lectus mollis viverra. Sed sodales finibus tempus. Praesent tristique tortor blandit enim venenatis, vulputate aliquet nunc consectetur. Nullam id eleifend tellus, a lacinia dolor. Donec varius eu turpis vel elementum. Proin ultricies purus ut metus accumsan interdum. Maecenas auctor auctor sem, nec venenatis nulla rutrum quis. Fusce tempor placerat tellus at maximus. Nulla vitae tortor ante.
<br/><br/>
Phasellus tristique, odio eget dictum mattis, dolor tortor facilisis mi, quis dignissim nunc justo a arcu. Mauris tempus nunc ut purus auctor tristique. Sed et consectetur est, a volutpat elit. Etiam aliquet tortor non lorem efficitur, et sollicitudin nisi suscipit. Sed a tortor sit amet nisl mattis dignissim. Phasellus tincidunt accumsan lobortis. Aliquam sagittis vestibulum leo. Sed in auctor ipsum, et fringilla ante.

Phasellus ac vulputate tellus. Duis in ante tempus, efficitur ex sed, euismod massa. Phasellus et auctor massa, ut ultricies augue. Donec suscipit vitae odio a rhoncus. Morbi quis sollicitudin purus. In hac habitasse platea dictumst. Sed hendrerit, quam in sollicitudin placerat, nunc est varius quam, vitae bibendum nisi justo quis turpis. Duis blandit, arcu vel maximus vulputate, justo nulla vehicula neque, vitae suscipit orci sem vitae nibh. Morbi et fringilla leo. Vivamus sed magna ultrices, rutrum risus condimentum, convallis dolor. Cras mattis metus id libero condimentum aliquam. Nunc vel consequat velit. In ante mauris, ultricies ut facilisis eget, imperdiet dictum magna. Nullam porttitor tortor eu libero dictum rhoncus. Aliquam erat volutpat. Aenean nunc risus, ultrices nec elit interdum, feugiat tempor ex.</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </div> 

      
    );

   
      
    
  }
}

export default BlogView;      

