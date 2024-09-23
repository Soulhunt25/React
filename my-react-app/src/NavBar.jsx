// import React from 'react'
// import './App.css'
// import { NavLink } from 'react-router-dom'

// const NavBar = () => {
//     return (
//         <>
//             <nav>
//                 <NavLink to='/'>
//                     <li>Home</li>
//                 </NavLink>

//                 <NavLink to='/about'>
//                     <li>About</li>
//                 </NavLink>

//                 <NavLink to='/contact'>
//                     <li>Contact Us</li>
//                 </NavLink>

//                 <NavLink to='/list'>
//                     <li>To-Do List</li>
//                 </NavLink>
//             </nav>
//         </>
//     )
// }

// export default NavBar


import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  


export default NavBar
