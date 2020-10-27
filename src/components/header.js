/*eslint jsx-a11y/anchor-is-valid: 0*/
import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"
import $ from "jquery"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap"

const Header = props => {
  const { data } = props,
    [isOpen, setIsOpen] = useState(false),
    [scrollTo, setScrollTo] = useState(localStorage.getItem("scrollTo")),
    headerLogo = data.headerlogo.imageFile.childImageSharp.original,
    mainMenu = data.mainMenu,
    toggle = () => setIsOpen(!isOpen),
    handleClick = (e, target) => {
      e.preventDefault()
      if (window.location.pathname === "/") {
        $("html, body").animate(
          {
            scrollTop: $(`${target}`).offset().top,
          },
          500
        )
      } else {
        navigate("/")
        setScrollTo(target)
        localStorage.setItem("scrollTo", target)
      }
    }
  useEffect(() => {
    if (scrollTo !== null && $(`${scrollTo}`).length) {
      $("html, body").animate(
        {
          scrollTop: $(`${scrollTo}`).offset().top,
        },
        500
      )
      localStorage.removeItem("scrollTo")
    }
  }, [scrollTo])
  return (
    <header>
      <Navbar
        color=""
        light={true}
        expand="lg"
        className="navbar navbar-default bootsnav navbar-top header-light background-transparent white-link navbar-expand-lg"
      >
        <div className="container nav-header-container">
          <div className="col-auto pl-lg-0">
            <Link to="/" className="navbar-brand">
              <img
                src={headerLogo.src}
                alt="Logo"
                className="m-0"
                style={{ maxHeight: `50px`, maxWidth: `100%` }}
              />
            </Link>
          </div>
          <div className="col accordion-menu pr-0 pr-md-3">
            <NavbarToggler onClick={toggle} />
            <Collapse
              isOpen={isOpen}
              navbar
              className="navbar-collapse collapse justify-content-end"
            >
              <Nav
                className="nav navbar-nav no-margin alt-font text-normal"
                navbar
                style={{ fontSize: "14px" }}
              >
                {mainMenu.map((item, index) => {
                  return (
                    <NavItem key={index}>
                      <a
                        role="button"
                        href={`/${item.menuLink.url}`}
                        tabIndex={0}
                        onClick={e => handleClick(e, item.menuLink.url)}
                        onKeyUp={e => true}
                        className="space-1 mx-2 nav-link MT-R"
                        style={{ cursor: "pointer" }}
                      >
                        {item.menuLink.title}
                      </a>
                    </NavItem>
                  )
                })}
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
