import React from 'react';
import Blog from '../../components/Blog'
// map the title and bio received from the backend here
const BlogComposer = (props) => {

    return (
        
        <div className="container">
<Blog title={props.title} bio={props.bio}/>
<Blog title={props.title} bio={props.bio}/>
<Blog title={props.title} bio={props.bio}/>
<Blog title={props.title} bio={props.bio}/>
<Blog title={props.title} bio={props.bio}/>
<Blog title={props.title} bio={props.bio}/>

        </div>
      
    )

}

export default BlogComposer;