import React from 'react';
import './fstyle.css'
import {
    BrowserRouter as Router
  } from "react-router-dom";




const Footerbar = (props) => {
 

    return (
        <Router>
            	<section id="footer">
      	<div className="container short-footer">
		
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><b>Blogs</b>around is a Registered ISO company, Inc. India </p>
					<p className="h6">&copy All right Reversed.<a className="text-green ml-2" href="#" target="_blank"><b>Blogs</b>around</a></p>
				</div>
				<hr/>
			</div>	
		</div>
        </section>
        </Router>
    )

}

export default Footerbar;