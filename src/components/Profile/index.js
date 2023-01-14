import React from 'react';
import './style.css'
const Profile = () => {
  
  return (
    <div className="skills">
        <div className="container">
            <div className="profile">
              <h4> My</h4> <h2> Profile</h2>
                <ul>
                    <li><span>Name:</span>Ahmad Shabarek</li>
                    <li><span>Birth:</span>1997</li>
                    <li><span>Address:</span>syria/aleppo</li>
                    <li><span>Phone:</span>222333444</li>
                    <li><span>Email:</span>email@gmail.com</li>
                    <li><span>Website:</span><a href="www.google.com">www.ahmad.com</a></li>
                </ul>
            </div>
            <div className="skill">
                <h2>Some</h2><h4>Skilles</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Magnam dolore exercitationem, rem officia nihil, velit quia sint accusamus iure nobis facilis deserunt quis alias,
                  ratione consequatur magni. Enim, odit error.</p>
                  <div className="bar"><span className="tit">HTML5&CSS3</span><span className="per">100%</span>
                    <div className="parent"><span className="sp1"></span></div>
                </div>
                  <div className="bar"><span className="tit">Bootstrap</span><span className="per">90%</span>
                    <div className="parent"><span className="sp2"></span></div>
                </div>
                  <div className="bar"><span className="tit">ReactJS</span><span className="per">75%</span>
                    <div className="parent"><span className="sp3"></span></div>
                </div>
                </div>
        </div>
    </div>
  );

}
export default Profile;