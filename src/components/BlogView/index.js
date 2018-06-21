import React, { Component } from "react";
import Footer from "../Footerbar";
import "./bstyle.css";
import httpClient from "../../HttpCommunicator";
import ReactHtmlParser from 'react-html-parser';

class BlogView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: "",
      theLoader: "loaderOff"
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    const fields = {
      articleid: this.props.location.state.articleid,
      uid: this.props.location.state.uid
    };

    //make api call here using uid from the props article data
    httpClient
      .getBlogBody(fields)
      .then(response => {
        console.log("the received res ++++sssssssssssss");
        console.log(response.output);

        this.setState({
          blogs: response.output
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

    
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={this.state.theLoader} />
            <div className="blog-header">
              <img
                className="blog-image "
                src={this.props.location.state.image}
                alt="blog-view1"
              />
              <div className="backdrop">
                <h2 className="blog-title">
                  {this.props.location.state.title}
                </h2>
              </div>
            </div>
            <div align="left">
              <h4 className="font36">{this.props.location.state.title}</h4>
              <h6>
                <b>
                  {this.state.blogs.author} | {this.state.blogs.timestamp}
                </b>{" "}
              </h6>
              <p className="font24">{this.props.location.state.description}</p>






              <p className="font20"> { ReactHtmlParser(this.state.blogs.body) }</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogView;
