import React, { useState} from "react";
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import logo from "../assets/img/logo.png";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
 
 
  return (
    <div className="bg-white header-part header">
     
      <Navbar color="light" light={true} expand="lg" className="bg-white p-sm-0">
        <div className="container d-sm-flex d-lg-flex d-xl-flex">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Chirofoam" width="290px" className="m-0"/>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="text-center text-lg-left">
            <Nav className="mr-0 ml-auto pb-2" navbar style={{fontSize:'14px'}}>
              <NavItem>
                <Link to="/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link MT-R" style={{ color: "#000" }}>
                  Home
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret nav className="space-1 p-sm-0 p-lg-0 p-xl-0 ml-4 MT-R" style={{ color: "#000" }}>
                  Our Services
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-center border-0 text-center text-uppercase MT-R" style={{fontSize:'16px'}}>
                  <Link to="/web-hosting/" className="nav-link space-1" style={{fontSize:'12px'}}>
                   WEB HOSTING
                  </Link>
                  <Link to="/web-designing/" className="nav-link space-1" style={{fontSize:'12px'}}>
                    WEB DESIGNING
                  </Link>
                  <Link to="/customized-software/" className="nav-link space-1" style={{fontSize:'12px'}}>
                    CUSTOMIZED SOFTWARE
                  </Link>
                  <Link to="/seo-and-sem/" className="nav-link space-1" style={{fontSize:'12px'}}>
                    SEO AND SEM
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret nav className="space-1 p-sm-0 p-lg-0 p-xl-0 ml-4 MT-R" style={{ color: "#000" }}>
                  Our Solutions
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-center border-0 text-center text-uppercase MT-R" style={{fontSize:'14px'}}>
                  <Link to="/for-schools/" className="nav-link space-1" style={{fontSize:'12px'}}>
                    FOR SCHOOLS
                  </Link>
                  <Link to="/for-coachings/" className="nav-link space-1" style={{fontSize:'12px'}}>
                    FOR COACHINGS
                  </Link>
                  <Link to="/for-corporate/" className="nav-link space-1" style={{fontSize:'12px'}}>
                    FOR CORPORATE
                  </Link>
                  <Link to="/for-students/" className="nav-link space-1" style={{fontSize:'12px'}}>
                    FOR STUDENTS
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <NavItem className="ml-4">
                <Link to="/contact-us/" className="space-1 p-sm-0 p-lg-0 p-xl-0 nav-link MT-R" style={{ color:'#000000' }}>
                  Contact Us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
