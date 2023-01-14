import React from 'react';
import './style.css'
const Contact = () => {
  
  return (
    <div class="drop">
        <div class="container">
            <h2>Drop <span>me a Feedback</span></h2>
            <form action="">
                <div class="input">
                    <input type="text" name="" id="" placeholder="Your Name"/>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                </div>
                <input type="text" name="" id="" class="sup" placeholder="Your subject"/>
                <textarea cols="30" rows="10" placeholder="Your message"></textarea>
                <input type="submit" value="Send message"/>
            </form>
        </div>
    </div>
  );

}
export default Contact;