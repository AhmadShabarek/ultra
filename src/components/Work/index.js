import React from 'react';
import './style.css'
const Work = () => {
  
  return (
    <div className="work">
        <div className="container">
            <h2>My work</h2>
            <div className="part">
                <i className="icon fa fa-chain fa-4x"></i>
                <h4>Mobile Ux</h4>
                <hr></hr>
                <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorem excepturi
                     explicabo possimus suscipit, ullam repellendus.</p>
            </div>
            <div className="part">
                <i className="icon fa fa-bolt fa-4x"></i>
                <h4>Web app</h4>
                <hr></hr>
                <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorem excepturi
                     explicabo possimus suscipit, ullam repellendus.</p>
            </div>
            <div className="part">
                <i className="icon fa fa-tachometer fa-4x"></i>
                <h4>HTML </h4>
                <hr></hr>
                <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorem excepturi
                     explicabo possimus suscipit, ullam repellendus.</p>    
            </div>
        </div>
    </div>
  );

}
export default Work;