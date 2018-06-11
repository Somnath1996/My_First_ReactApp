import React from 'react';
import Carousel from '../../components/Carousel'
import BlogComposer from '../BlogComposer'
import Footer from '../../components/Footerbar'
const FrontPage = (props) => {

    return (
        
        <div>
<Carousel/>
<div><h1>Welcome to<b> Blogs</b>around</h1></div>
<BlogComposer title={props.title} bio={props.bio}/>
<Footer/>
        </div>
      
    )

}

export default FrontPage;