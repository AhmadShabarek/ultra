import React from 'react';
import './style.css'
const Socialmedia = () => {
  
  return (
    <div className="social">
        <div className="soc face">
            <i className="fa fa-facebook fa-3x"></i>
            <p><span>Follow me on</span>  FACEBOOK</p>
        </div>
        <div className="soc twitter">
            <i className="fa fa-twitter fa-3x"></i>
            <p><span>Tweet me on</span>  TWITTER</p>
        </div>
        <div className="soc pintrest">
            <i className="fa fa-pinterest fa-3x"></i>
            <p><span>Pin me on</span>  PINTEREST</p>
        </div>
    </div>
  );

}
export default Socialmedia;