import React, { useState, useEffect } from 'react';
import './style.css';
const Portfolio = () => {

  return (
    <div className="port">
        <h1>My portfolio</h1>
        <ul>
            <li className="active">All</li>
            <li>WEB</li>
            <li>Photoshop</li>
            <li>Wordpress</li>
            <li>Mobile</li>
        </ul>
        <div className="box">
            <div><img src="/images/Portfolio/portfolio-img1.jpg"/><p className="overlay"><span>Show image</span></p></div>
            <div><img src="/images/Portfolio/portfolio-img2.jpg"/><p className="overlay"><span>Show image</span></p></div>
            <div><img src="/images/Portfolio/portfolio-img3.jpg"/><p className="overlay"><span>Show image</span></p></div>
            <div><img src="/images/Portfolio/portfolio-img4.jpg"/><p className="overlay"><span>Show image</span></p></div>
            <div><img src="/images/Portfolio/portfolio-img5.jpg"/><p className="overlay"><span>Show image</span></p></div>
            <div><img src="/images/Portfolio/portfolio-img6.jpg"/><p className="overlay"><span>Show image</span></p></div>
            <div><img src="/images/Portfolio/portfolio-img7.jpg"/><p className="overlay"><span>Show image</span></p></div>
            <div><img src="/images/Portfolio/portfolio-img8.jpg"/><p className="overlay"><span>Show image</span></p></div>
        </div>
    </div>
  );

}
export default Portfolio;