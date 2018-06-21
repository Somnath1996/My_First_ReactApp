import React from 'react';
import one from './images/one.jpg';
import two from './images/two.jpg';
import three from './images/three.jpg';
import four from './images/four.jpg'



const Carousel = (props) => {
 
    return (
         <div className="container-fluid some" >

            <div className="row">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>

                
                    <div className="carousel-inner">
                    <div className="item active">
                    <img src={four} alt="Los Angeles" />
                    </div>
                    

                <div className="item">
                    <img src={two} alt="Chicago" />
                </div>
                
                <div className="item">
                    <img src={one} alt="New york" />
                </div>
                <div className="item">
                    <img src={three} alt="New york" />
                </div>
                
                </div>

    
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
    </div>
  </div>
        </div>
    )

}

export default Carousel;