import React,{ Component } from 'react';
import { BrowserRouter  , Route,Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Footer from './components/Footer';
class  App extends Component {
  render(){
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route  path="/" >
          <Route  index  element={<Index />}/>
          <Route  path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
}
export default App;
