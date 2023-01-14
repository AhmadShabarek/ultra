import React,{ Component } from 'react';
import About from './../About';
import Footer from './../Footer';
import Home from './../Home';
import Portfolio from './../Portfolio';
import Socialmedia from './../Socialmedia';
import Profile from './../Profile';
import Work from './../Work';

class  Index extends Component {
  render(){
  return (
    <div>
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <Socialmedia />
      <Footer />
    </div>
  );
}
}
export default Index ;
