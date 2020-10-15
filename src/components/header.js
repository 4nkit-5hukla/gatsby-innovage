/*eslint jsx-a11y/anchor-is-valid: 0*/
import React, { useState} from "react";
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const { data } = props
  const headerLogo = data.headerlogo.imageFile.childImageSharp.original
  const mainMenu = data.mainMenu
  return (
    <div className="bg-transparent header-part header position-absolute w-100">
      <Navbar color="" light={true} expand="lg" className="p-sm-0">
        <div className="container d-sm-flex d-lg-flex d-xl-flex">
          <Link to="/" className="navbar-brand">
            <img
              src={headerLogo.src}
              alt="Logo"
              width="290px"
              className="m-0"
            />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="text-center text-lg-left">
            <Nav
              className="mr-0 ml-auto pb-2"
              navbar
              style={{ fontSize: "14px" }}
            >
              {mainMenu.map((item, index) => {
                return (
                  <NavItem key={index} className="mx-2">
                    <a
                      role="button"
                      tabIndex={0}
                      onClick={() => scrollTo(item.menuLink.url)}
                      onKeyUp={e => true}
                      className="text-white space-1 p-sm-0 p-lg-0 p-xl-0 nav-link MT-R"
                      style={{ cursor: "pointer", color: "#000000" }}
                    >
                      {item.menuLink.title}
                    </a>
                  </NavItem>
                )
              })}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
};

export default Header;
