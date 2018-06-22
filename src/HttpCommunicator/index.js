import axios from "axios";
import jwtDecode from "jwt-decode";

// instantiate axios
const httpClient = axios.create();

//retrive token from localstorage
httpClient.getToken = function() {
  return localStorage.getItem("token");
};

//store the token to the localstorage
httpClient.setToken = function(token) {
  localStorage.setItem("token", token);
  return token;
};

//read and decode the jwt token from the localStorage
httpClient.getCurrentUser = function() {
  const token = this.getToken();
  console.log(token);
  if (token) return jwtDecode(token);
  return null;
};

//send the login request to backend server
httpClient.logIn = function(credentials) {
  return this({
    method: "post",
    url: "http://localhost:3000/routes/handlers/users/login",
    data: credentials
  }).then(serverResponse => {
    console.log(serverResponse);
    const token = serverResponse.data.token;
    if (token) {
      // sets token as an included header for all subsequent api requests
      this.defaults.headers.common.token = this.setToken(token);
      return jwtDecode(token);
    } else {
      return false;
    }
  });
};

//send register request to backend server
httpClient.register = function(credentials) {
  return this({
    method: "post",
    url:  "http://localhost:3000/routes/handlers/users/register",
    data: credentials
  }).then(serverResponse => {
    console.log(serverResponse);
    const user = serverResponse.data.user;
    if (user) {
      return user;
    } else {
      return false;
    }
  });
};


//send the blog data  to backend server
httpClient.createBlog = function(details) {
  return this({
    method: "post",
    url: " http://localhost:3000/routes/handlers/home/article",
    data: details
  }).then(serverResponse => {
    console.log(serverResponse);
   return serverResponse.data.status;

  });
};



//get the user bio and date of account creation using the backend call
httpClient.getBio = function() {
  return this({
    method: "get",
    url: "http://localhost:3000/routes/handlers/users/bio"
  }).then(serverResponse => {
    console.log(serverResponse);
    const date = serverResponse.data.date;
    const bio = serverResponse.data.bio;
    let response = [bio, date];
    return response;
  });
};

//get the user title image description using the backend call
httpClient.getBlog = function() {
  return this({
    method: "get",
    url: " http://localhost:3000/routes/handlers/home/article"
  }).then(serverResponse => {
    console.log("HHHHHHHHHHHHHHHHHHHHHHHH");
    console.log(serverResponse.data);
    let response = serverResponse.data;
    return response;
  });
};



//get the blog body,authorname,time-stamp date
httpClient.getBlogBody = function(articleid) {
  return this({
    method: "post",
    url: " http://localhost:3000/routes/handlers/home/article/blogbody",
    data: articleid
  }).then(serverResponse => {
    console.log("HHHHHHHHHHHHHHHHHHHHHHHH");
    console.log(serverResponse.data);
    let response = serverResponse.data;
    return response;
  });
};



//delete the jwt token from the localStorage
httpClient.logOut = function() {
  localStorage.removeItem("token");
  delete this.defaults.headers.common.token;
  return true;
};

// During initial app load attempt to set a localStorage stored token
// as a default header for all api requests.
httpClient.defaults.headers.common.token = httpClient.getToken();

export default httpClient;
