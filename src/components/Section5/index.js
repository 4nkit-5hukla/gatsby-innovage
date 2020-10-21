import React from "react"
import ReactHtmlParser from "react-html-parser"

const Section5 = props => {
  return (
    <section id={props.id !== "" ? props.id : null} className="wow fadeIn">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 md-margin-50px-bottom">
            <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600">
              {props.content.leftTitle}
            </h3>
            <div className="left-list">
              {ReactHtmlParser(props.content.leftContent)}
            </div>
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
