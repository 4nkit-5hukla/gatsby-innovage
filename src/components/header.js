import React, { useState} from "react";
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import logo from "../assets/img/logo.png";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
 
 
  return (
    <div className="bg-transparent header-part header position-absolute w-100">
     
      <Navbar color="" light={true} expand="lg" className="p-sm-0">
        <div className="container d-sm-flex d-lg-flex d-xl-flex">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Chirofoam" width="290px" className="m-0"/>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="text-center text-lg-left">
            <Nav className="mr-0 ml-auto pb-2" navbar style={{fontSize:'14px'}}>
              <NavItem>
                <Link to="/" className="text-white space-1 p-sm-0 p-lg-0 p-xl-0 nav-link MT-R" style={{ color: "#000" }}>
                  Home
                </Link>
              </NavItem>
              <NavItem className="ml-4">
                <Link to="/our-clients/" className="text-white space-1 p-sm-0 p-lg-0 p-xl-0 nav-link MT-R" style={{ color:'#000000' }}>
                  Our Clients
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret nav className="text-white space-1 p-sm-0 p-lg-0 p-xl-0 ml-4 MT-R" style={{ color: "#000" }}>
                  Website Development
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-center border-0 text-center text-uppercase MT-R" style={{fontSize:'16px'}}>
                  <Link to="/gatsby-site/" className="text-white nav-link space-1" style={{fontSize:'12px'}}>
                    Gatsby Site
                  </Link>
                  <Link to="/wordpress-site/" className="text-white nav-link space-1" style={{fontSize:'12px'}}>
                    Wordpress Site
                  </Link>
                  <Link to="/shopify-site/" className="text-white nav-link space-1" style={{fontSize:'12px'}}>
                    Shopify Site
                  </Link>
                  <Link to="/magento-site/" className="text-white nav-link space-1" style={{fontSize:'12px'}}>
                    Magento Site
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="ml-4">
                <Link to="/blogs/" className="text-white space-1 p-sm-0 p-lg-0 p-xl-0 nav-link MT-R">
                  Blogs
                </Link>
              </NavItem>
              
              <NavItem className="ml-4">
                <Link to="/contact-us/" className="text-white space-1 p-sm-0 p-lg-0 p-xl-0 nav-link MT-R">
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
