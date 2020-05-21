import React from "react"
import ReactHtmlParser from "react-html-parser"

const Section5 = props => {
  return (
    <section className="wow fadeIn">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 md-margin-50px-bottom">
            <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600">
              {props.content.leftTitle}
            </h3>
            <div className="left-list">
              {ReactHtmlParser(props.content.leftContent)}
            </div>
            <a
              href="home-classic-digital-agency.html"
              className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"
            >
              <i
                className="fa fa-play-circle icon-very-small margin-5px-right no-margin-left"
                aria-hidden="true"
              ></i>{" "}
              ALL advantages
            </a>
          </div>
          <div className="col-12 col-lg-7 text-center">
            <img
              src={
                props.content.rightImage.imageFile.childImageSharp.original.src
              }
              alt={props.content.rightImage.altText}
              className="w-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section5
