import React, { Component } from "react";
import Blog from "../../components/Blog";
import Paper from "@material-ui/core/Paper";
// map the title and bio received from the backend here
class BlogComposer extends Component {
  //map here

  render() {
    //mapp

    var blogs = this.props.blogs.map((blog, index) => {
      return (
        <Blog
          uid={blog.uid}
          articleid={blog.articleid}
          key={index}
          title={blog.title}
          image={blog.images}
          description={blog.description}
        />
      );
    });

    //return the mapped values
    return (
  <div className="container">
    
    {blogs}
    </div>
  
    )
  }
}

export default BlogComposer;
