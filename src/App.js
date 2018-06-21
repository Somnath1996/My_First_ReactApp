import React, { Component } from "react";
import "./App.css";
import httpClient from "./HttpCommunicator";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Headerbar from "./components/Headerbar";
import Logout from "./components/Logout";
import FrontPage from "./containers/FrontPage";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import BlogView from "./components/BlogView";
import Profile from "./components/Profile";
import Write from "./components/Write"
import Switch from "react-router-dom/Switch";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  //static fake data use the backend integration
  constructor(props) {
    super(props);
    let sdf =
      '"These are the dummy text data will be fetched from the backed frjfbcks dfne kfnfkshfvenc df cejdf vje ixenf eifdewfh  efe erjf xefjons fwjfneijf eisf eivf eisdfsdfj';
    this.state = {
      currentUser: httpClient.getCurrentUser(),
      blog: {
        title: "Lorem ipsum",
        bio: sdf
      },

      Auth: {
        authStatus: "true"
      }
    };
  }

  onLoginSuccess(user) {
    console.log(this.state.currentUser);
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  logOut() {
    console.log(this.state.currentUser);
    httpClient.logOut();
    this.setState({ currentUser: null });
  }

  render() {
    return (
      <Router>
           <MuiThemeProvider>
        <div className="App">
          <Headerbar currentUser={this.state.currentUser} />
          <Switch>
            <Route
              exact
              strict
              path="/"
              component={() => (
                <FrontPage
                  title={this.state.blog.title}
                  bio={this.state.blog.bio}
                />
              )}
            />

            <Route
              path="/login"
              render={props => {
                return (
                  <Login
                    {...props}
                    onLoginSuccess={this.onLoginSuccess.bind(this)}
                  />
                );
              }}
            />
            <Route
              path="/logout"
              render={props => {
                return <Logout onLogOut={this.logOut.bind(this)} />;
              }}
            />

            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route
              path="/blogview"
              render={props => {
                return <BlogView {...props} />;
              }}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/write" component={Write} />
          </Switch>
        </div>
    </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
