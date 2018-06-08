import React from 'react';
const Blog = (props) => {
    return (
        <div className="container">
            <div className="col-md-12 mainBlogWrapper">
                <div className="card  ">

                    
                        <div>

                        <h1><b>{props.title}</b></h1> 
                        <p></p>
                        <p>{props.bio}</p>
                    
                        </div>
                </div>
            </div> 

        </div>
        
     
    )

}

export default Blog;