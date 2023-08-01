import React from 'react'
import Home from './Components/Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Components/Pages/About';
import Footer from './Components/Footer/Footer';
import Recipes from './Components/Pages/Recipes';
import'./App.css'





function App() {
  return (
    <Router>
    <Header />
 
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route  path="/about" element={<About />}></Route>
      <Route path='/recipes' element={<Recipes/>}></Route>
      
    </Routes>
    <Footer/>
  </Router>
    
   
    
  )
}

export default App