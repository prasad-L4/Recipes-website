import React from "react";
import "./Header.css";
import "../../Fonts/AlexBrush-Regular.ttf";
import { FaSearch } from 'react-icons/fa';
import {Container} from "react-bootstrap";


import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import{useNavigate} from "react-router-dom"
function Header() {
  const navigate=useNavigate();
  
  return (
    <div>
      <div className="header">
        
      <Navbar bg="white" >
          <Container>
            <Navbar.Brand className="title" >Sprinkle Of Flavor</Navbar.Brand>
            <Nav>
              
              <Nav.Link className="home" onClick={()=>{navigate("/")}}>HOME</Nav.Link>
              <Nav.Link className="about"onClick={()=>{navigate("/about")}}>ABOUT</Nav.Link>
              <Nav.Link className="recipes" onClick={()=>{navigate("/recipes")}}>RECEPIS</Nav.Link>
              <Nav.Link className=" search"><FaSearch/></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
        
      </div> 
      <hr className="hr" />               
    </div>
  );
}

export default Header;
