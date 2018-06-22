import React, { Component } from "react";
import Carousel from "../../components/Carousel";
import BlogComposer from "../BlogComposer";
import Footer from "../../components/Footerbar";
import httpClient from "../../HttpCommunicator";

class FrontPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: ""
    };
  }

  componentWillMount() {
    //make api call here using id from the jwt
    httpClient
      .getBlog()
      .then(response => {
        console.log("the received res sssssssssssssssssss");
        console.log(response.blogs);

        this.setState({
          blogs: response.blogs
        });
        console.log("#########");
        console.log(this.state);
      })
      .catch(error => {
        console.log("error occured in getting bio from bckend");
        console.log(error);
      });
  }

  render() {
    if (this.state.blogs) {
      return (
        <div>
          <Carousel />
          <div>
            <h1 >
              Welcome to<b> Blogs</b>around
            </h1>
          </div>
          <BlogComposer blogs={this.state.blogs} />
          <Footer />
        </div>
      );


    } else {
    return (
    <div>
    <h1>still rendering</h1>
          <img src="http://gifimage.net/wp-content/uploads/2017/09/ajax-loader-gif-13.gif" alt="still loading"/>
          <h3>please reload</h3>
    </div>
    );
    }

    
  }
}

export default FrontPage;
