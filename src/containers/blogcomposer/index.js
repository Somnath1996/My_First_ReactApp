import React from "react";
import Blog from "../../components/Blog";
// map the title and bio received from the backend here
const BlogComposer = props => {
  //map here
  
console.log("abc", props);

  if(props.blogs){
    let blogs = props.blogs.map((blog, index) => {
        <Blog
        key={index}
        title={blog.title}
        image={blog.image}
        description={blog.description}
        />;
    });
}

  return(
  <div className="container">{blogs}</div>
)
};

export default BlogComposer;
