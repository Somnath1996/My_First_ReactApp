import React, { Component } from 'react';
import './App.css';
import httpClient from './HttpCommunicator'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Headerbar from './components/Headerbar'  // imported this for the css
import FrontPage from './containers/FrontPage'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'
import BlogView from './components/BlogView'
import Profile from './components/Profile'
import Switch from 'react-router-dom/Switch';

class App extends Component {
//static fake data use the backend integration
  constructor(props) {
    super(props);
   let sdf="\"These are the dummy text data will be fetched from the backed frjfbcks dfne kfnfkshfvenc df cejdf vje ixenf eifdewfh  efe erjf xefjons fwjfneijf eisf eivf eisdfsdfj"
    this.state = {
      currentUser: httpClient.getCurrentUser(),
      blog:{
      title:"Lorem ipsum",
      bio:sdf
     },

      Auth:{
        authStatus:"true"
        }
    };




}

    
onLoginSuccess(user) {
  this.setState({ currentUser: httpClient.getCurrentUser() })
}


render() {


return (
<Router>
  <div className="App">
     
       <Headerbar/>
       <Switch>
        <Route exact strict path="/" component={() => <FrontPage title={this.state.blog.title} bio={this.state.blog.bio}/>} />

        	<Route path="/login" render={(props) => {
						return <Login {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />
       
        <Route path='/register' component={Register} />
        <Route path='/forgotpassword' component={ForgotPassword} />
        <Route path='/blogview' component={BlogView}/>
        <Route path='/profile' component={Profile}/>
    </Switch>        
        
      
  </div>
</Router>
    );
  }
}





export default App;                 