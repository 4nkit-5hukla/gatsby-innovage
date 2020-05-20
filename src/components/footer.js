import React from "react"
import logo from "../assets/images/logo.png"

const Footer = (props) => {
  return (
    <footer className="footer-strip-dark bg-extra-dark-gray padding-90px-tb lg-padding-70px-tb md-padding-50px-tb sm-padding-40px-tb">
      <div className="container">
        <div className="row align-items-center sm-text-center">
          <div className="col-md-8 col-12 sm-margin-30px-bottom">
            <h5 className="text-white margin-5px-bottom">
              Let's make something great together
            </h5>
            <span className="text-color-2 text-medium">
              Get in touch with us and send some basic info for a quick quote
            </span>
          </div>
          <div className="col-md-4 col-12 text-md-right text-sm-center">
            <span className="text-extra-large text-extra-dark-gray text-light-gray d-inline-block sm-d-block">
              <a
                href="/"
                className="btn btn-large btn-transparent-white d-table d-lg-inline-block md-margin-lr-auto"
              >
                Start a project
              </a>
            </span>
          </div>
        </div>
        <div className="border-top border-color-medium-dark-gray padding-80px-top margin-80px-top lg-padding-60px-top lg-margin-60px-top md-padding-50px-top md-margin-50px-top sm-padding-40px-top sm-margin-40px-top">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12 md-text-center md-margin-50px-bottom sm-margin-30px-bottom">
              <a href="/">
                <img
                  className="footer-logo"
                  src={logo}
                  data-rjs="images/logo-white@2x.png"
                  alt="Pofo"
                />
              </a>
            </div>
            <div className="text-color-2 col-lg-4 col-md-5 col-12 sm-margin-30px-bottom text-medium sm-text-center">
              301 The Greenhouse,
              <br />
              Custard Factory, London, E2 8DY.
            </div>
            <div className="text-color-2 col-lg-3 col-md-4 col-12 sm-margin-30px-bottom text-medium sm-text-center">
              +44 (0) 123 456 7890
              <br />
              <a href="mailto:sales@domain.com">sales@domain.com</a>
            </div>
            <div className="col-lg-2 col-md-3 text-md-right sm-text-center">
              <div className="social-icon-style-8 d-inline-block vertical-align-middle">
                <ul className="small-icon mb-0">
                  <li>
                    <a
                      className="facebook text-white-2"
                      href="https://www.facebook.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter text-white-2"
                      href="https://twitter.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="google_icon text-white-2"
                      href="https://plus.google.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram text-white-2"
                      href="https://instagram.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;