import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logo = "./Assets/Images/Goldhammer_logo.svg";

  return (
    <div className="container-fluid">
      <Navbar style={{backgroundColor:"rgba(39,40,34,.9)"}} fixed="top" dark expand="md">
      <NavbarBrand className="p-0">
          <a href="#">
          <img className="m-0" src={logo} style={{width:100}} />
          </a>
        </NavbarBrand>
        <NavbarToggler className="toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navlink" style={{fontSize:"1.3rem"}}href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" style={{fontSize:"1.3rem"}}href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" style={{fontSize:"1.3rem"}}href="#certs">Certificates</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;