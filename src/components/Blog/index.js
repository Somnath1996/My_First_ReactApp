import React from 'react';
import some from '../Carousel/images/some.jpg'
const Blog = (props) => {
    return (
            <div className="col-md-4 mainBlogWrapper">
                <div className="card">

                    
                        <div>
                        <img className="card_img" src={some} alt="Chicago" />
                        <h3><b>{props.title}</b></h3> 
                        <p></p>
                        <p>{props.bio}</p>
                    
                        </div>
                </div>
            </div> 
     
    )

}

export default Blog;