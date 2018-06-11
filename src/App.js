import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Headerbar from './components/Headerbar'  // imported this for the css
import FrontPage from './containers/FrontPage'
import Register from './components/Register'

import Login from './components/Login'

import Switch from 'react-router-dom/Switch';

class App extends Component {
//static fake data use the backend integration
  constructor(props) {
    super(props);
   let sdf="\"These are the dummy text data will be fetched from the backed frjfbcks dfne kfnfkshfvenc df cejdf vje ixenf eifdewfh  efe erjf xefjons fwjfneijf eisf eivf eisdfsdfj"
    this.state = {
      blog:{
      title:"Lorem ipsum",
      bio:sdf
     },

      Auth:{
        authStatus:"true"
        }
    };
}

    


render() {


return (
<Router>
  <div className="App">
     
        <div className="container designWrapper">
            <strong>Blogs</strong>around    
            <Link to='/login' className="login-btn">signin</Link>
        </div>
       <Switch>
        <Route exact strict path="/" component={() => <FrontPage title={this.state.blog.title} bio={this.state.blog.bio}/>} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
    </Switch>        
        
      
  </div>
</Router>
    );
  }
}





export default App;                 