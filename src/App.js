import React, { Component } from 'react';
import './App.css';
import Headerbar from './components/Headerbar'
import Blog from './components/Blog'
import Login from './components/Login'
import Register from './components/Register'

class App extends Component {

  constructor(props) {
    super(props);
   let sdf="\"evryday frjfbcks dfne kfnfkshfvenc df cejdf vje ixenf eifdewfh  efe erjf xefjons fwjfneijf eisf eivf ei j"
    this.state = {
      blog:{
      title:"Lorem ipsum",
      bio:sdf,
      date:new Date()},

      Auth:{
        authStatus:"true"

      }
    };
  }

  render() {
    return (
      <div className="App">

        {console.log(this.state.blog.date)}
        <Headerbar/>
        <Login/>
      </div>
    );
  }
}

export default App;                 