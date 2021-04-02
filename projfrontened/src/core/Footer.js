import React from 'react';
import { Link } from 'react-router-dom';


const Footers=()=>{
    return(
     
        <footer className="footer">
          
          <div className="container">
            <div className="row justify-content-center">             
                <div className="col-3 offset-1 col-sm-2 mt-4">
                    <h5>Links</h5>
                    <ul className="list-unstyled text-danger">
                    <li  ><Link className="colo" to='/home'>Home</Link></li>
                        <li><Link className="colo"  to='/signup'>About Us</Link></li>
                        <li><Link className="colo" to='/signin'>Menu</Link></li>
                        
                    </ul>
                </div>
                <div className="col-7 col-sm-5 mt-4">
                    <h5>Our Address</h5>
                    <address>
                    Shop No 31, DDA Shopping Complex, Block B<br/>
                    Naraina Industrial Area Phase 1<br />
                    New Delhi, Delhi 110028 <br />
		              <i className="fa fa-phone fa-lg"></i>: +918712345678<br />
		              <i className="fa fa-fax fa-lg"></i>: +918287654321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a className=" text-white" href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <h4 className="text-center">Social Media</h4>
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 TS</p>
                </div>
            </div>
        </div>
        </footer>
    )
       
}
export default Footers