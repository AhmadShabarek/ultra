import React from 'react';
import './style.css'

const Home = () => {
  
  return (
    <div className="home">
        <div className="container">
            <h2 className="name">Ahmad Shabarek</h2>
            <h4 className="job">Web Developer</h4>
            <p className="info">Iam a professional <span> Front-End Developer </span>
                 creating modern<br/> and resposive web design.<br/>
                 Let us work together<br/>.Thank you.</p>
            <button className="btn">Let's Begin</button>
        </div>
    </div>
  );

}
export default Home;