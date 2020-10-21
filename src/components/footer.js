import React from "react"
import { Link } from "gatsby"
import ReactHtmlParser from "react-html-parser"

const Footer = (props) => {
  const { data } = props,
    cta = data.cta,
    column2 = data.column2,
    column3 = data.column3,
    socialMedia = data.socialMedia,
    footerMenu = data.footerMenu
  console.log(data)
  return (
    <footer className="footer-strip-dark bg-extra-dark-gray padding-90px-tb lg-padding-70px-tb md-padding-50px-tb sm-padding-40px-tb">
      <div className="container">
        {cta.enable && (
          <div className="d-flex align-items-center sm-text-center">
            <div className="flex-grow-1 sm-margin-30px-bottom">
              {cta.title !== "" && (
                <h5 className="text-white margin-5px-bottom">{cta.title}</h5>
              )}
              {cta.subTitle !== "" && (
                <span className="text-color-2 text-medium">{cta.subTitle}</span>
              )}
            </div>
            <div className="flex-shrink-0 text-md-right text-sm-center">
              {cta.buttonLink.title !== "" && (
                <span className="text-extra-large text-extra-dark-gray text-light-gray d-inline-block sm-d-block">
                  <a
                    href={cta.buttonLink.url}
                    className="btn btn-large btn-transparent-white d-table d-lg-inline-block md-margin-lr-auto"
                  >
                    {cta.buttonLink.title}
                  </a>
                </span>
              )}
            </div>
          </div>
        )}
        <div
          className={`${
            cta.enable
              ? "border-top border-color-medium-dark-gray padding-80px-top margin-80px-top lg-padding-60px-top lg-margin-60px-top md-padding-50px-top md-margin-50px-top sm-padding-40px-top sm-margin-40px-top"
              : ""
          }`}
        >
          <div className="row no-gutters align-items-center">
            <div className="col-lg-2 col-md-12 md-text-center md-margin-50px-bottom sm-margin-30px-bottom">
              <div className="social-icon-style-8 d-inline-block vertical-align-middle">
                <ul className="small-icon mb-0">
                  {socialMedia.map(({ link, icon }, index) => {
                    return (
                      <li key={index}>
                        <a
                          className="text-white-2"
                          href={link.url}
                          title={link.title}
                          rel="noopener noreferrer"
                          target={link.target}
                        >
                          {ReactHtmlParser(icon)}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="text-color-2 col-lg-4 col-md-5 col-12 sm-margin-30px-bottom text-medium sm-text-center">
              {ReactHtmlParser(column2)}
            </div>
            <div className="text-color-2 col-lg-2 col-md-4 col-12 sm-margin-30px-bottom text-medium sm-text-center">
              {ReactHtmlParser(column3)}
            </div>
            <div className="col-lg-4 col-md-4 text-md-right sm-text-center">
              <ul className="footer-menu mb-0 list-unstyled d-flex justify-content-between">
                {footerMenu.map(({ link }, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className="text-white-2"
                        to={link.url}
                        rel="noopener noreferrer"
                        target={link.target}
                      >
                        {link.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer