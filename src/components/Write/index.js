//incorporate input validation
import React, { Component } from "react";
import Footer from "../ShortFooter";
import "./wstyle.css";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Typography from "@material-ui/core/Typography";
import httpClient from "../../HttpCommunicator/";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'; 

class Write extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: httpClient.getCurrentUser(),
      title: "",
      titleError: "",
      description: "",
      descriptionError: "",
      body: "",
      bodyError: "",
      image: "",
      imageError: "",
      theLoader: "loaderOff"
    };
    this.handleChange = this.handleChange.bind(this)
  }

  //get the user inputs
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("user input values");
    console.log(this.state);
  };

  handleChange(value) {
    this.setState({ body: value.toString() })
  }



  onSubmit = e => {
    e.preventDefault();

    //start the loader
    this.setState({
      theLoader: "loaderOn"
    });
    // console.log("***state before sendiong data***");
    // console.log(this.state)
    //call api via http communicator
    //********************************************* */
    const details = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body,
      image: this.state.image
    };
    console.log("***state before sendiong data***");
    console.log(details);
    // send the fields to createBlog via httpClient of http communicator
    httpClient.createBlog(details).then(status => {
      console.log("mgk7777777" + status + "datails" + details);

      // remove the sensitive information from the state
      this.setState({ title: "", description: "", body: "", image: "" });
      // if posted successfully
      if (status) {
        //Turn the loader off
        this.setState({ theLoader: "loaderOff" });
        window.alert("The blog was submitted sucessfully");
      } else {
        window.alert("Error Occured while submitting  post");
        console.log("Error Occured backend communication error");
        this.setState({ theLoader: "loaderOff" });
      }
    });

    //********************************************* */
  };

  // onchange handlers

  //DISPLAY PAGE IF AND  ONLY IF VALID JWT TOKEN IS PRESENT or redirect to the 401 route

  //build a page of the else part

  render() {
    if (this.state.currentUser) {
      return (
        <div align="left" className="container padderTop20">
          <Typography variant="display2" gutterBottom >
            Compose Blog
          </Typography>
          <br />
          <TextField
            hintText="Blog Title"
            name="title"
            floatingLabelText="Title"
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.title}
            onChange={e => this.change(e)}
            errorText={this.state.titleError}
            floatingLabelFixed
          />
          <br />

          <TextField
            name="description"
            hintText="Blog Description"
            floatingLabelText="Description"
            onChange={e => this.change(e)}
            value={this.state.description}
            multiline
            errorText={this.state.descriptionError}
            floatingLabelFixed
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            margin="normal"
          />
          <br />

  




      <ReactQuill value={this.state.body}

                  onChange={this.handleChange} />




          <br />
          <TextField
            name="image"
            hintText="paste image url"
            floatingLabelText="Image url"
            onChange={e => this.change(e)}
            value={this.state.image}
            multiline
            errorText={this.state.imageError}
            floatingLabelFixed
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            margin="normal"
          />
          <br />
          <RaisedButton
            className="marginTop20"
            label="Post"
            onClick={e => this.onSubmit(e)}
            primary
          />
        </div>
      );
    } else {
      return (
        <div className="container ">
          <br /> <br /> <br />
          <br /> <br /> <br />
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










export default Write;
