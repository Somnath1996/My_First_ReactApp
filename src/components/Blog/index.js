import React from "react";
import { Link } from "react-router-dom";
const Blog = props => {
  return (
    <div className="col-md-4 mainBlogWrapper">
      <div className="cardi">
        <div>
          <img className="card_img" src={props.image} alt="blogimage" />
          <Link to={{ pathname: "/blogview", state: { ...props } }}>
            <h3 align="left">
              <b>{props.title}</b>
            </h3>
          </Link>

          <p className="remove-margin" align="left">
            {props.description}
          </p>

          <Link to={{ pathname: "/blogview", state: { ...props } }}>
            <h4 align="left">
              Read More  &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path
                  d="M656.2 500.1L249.3 77.3C234 61.9 234 37 249.3 21.5c15.3-15.4 39.9-15.4 55.2 0l446.1 450.6c15.3 15.4 15.3 40.4 0 55.8L304.5 978.4a38.752 38.752 0 0 1-55.2 0c-15.3-15.3-15.3-40.3 0-55.8l406.9-422.5z"
                  fill="currentColor"
                />
              </svg>
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
