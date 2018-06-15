import React, { Component } from "react";
import Footer from "../ShortFooter";
import "./pstyle.css";
import some from "../Carousel/images/profilesideimage.jpg";
import httpClient from "../../HttpCommunicator/";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: httpClient.getCurrentUser(),
      bio: null,
      date: "",
      blogsCount: null
    };
    this.activateLoader = this.activateLoader.bind(this);
  }

  activateLoader = () => {
    this.setState({ theLoader: "loaderOn" });
    console.log("*******");
    console.log(this.state);
  };

  componentWillMount() {
    // go to the top of the page
    window.scrollTo(0, 0);
    //api calls
    httpClient
      .getBio()
      .then(response => {
        console.log("the received res ########################");
        console.log(response);
        this.setState({
          bio: response[0],
          date: response[1]
        });
      })
      .catch(error => {
        console.log("error occured in getting bio from bckend");
        console.log(error);
      });
  }

  render() {
    if (this.state.currentUser) {
      return (
        <div className="container profiler">
          <div className="row myborder">
            <div className="col-md-6" align="left">
              <h1 className="font56">{this.state.currentUser.username}</h1>
              <p className="font15">
                {this.state.date}|{" "}
                {this.state.blogsCount ? this.state.blogsCount : "counting"}{" "}
                blogs
              </p>
              <hr />
              <h4>Bio</h4>
              <p> {this.state.bio}</p>
            </div>

            <div className="col-md-6">
              <div className="profile-header">
                <img className="profile-image " src={some} alt="blog-view1" />
                <div className="name-placement">
                  <h2 className="blog-title">
                    <b>Blogs</b>around
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <h2>***Unauthorized Route!!!***</h2>
          <hr />
          <h4>login to visit this route</h4>
          <br />
          <br />
          <h1>401</h1>
          <Footer />
        </div>
      );
    }
  }
}

export default Profile;
