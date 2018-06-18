import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Blog = props => {
  return (
    <div className="col-md-4 mainBlogWrapper">
      <div className="card">
        <div>
          <img className="card_img" src={props.image} alt="blogimage" />
       
     <Link to={{ pathname: '/blogview', state: { ...props} }}>
            <h3>
              <b>{props.title}</b>
            </h3>
          </Link>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
