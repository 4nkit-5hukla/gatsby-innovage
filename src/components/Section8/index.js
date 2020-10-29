import React from "react"
import ReactHtmlParser from "react-html-parser"

const Section8 = props => {
  return (
    <section id={props.id !== "" ? props.id : null} className="wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {props.content.sectionimage !== null && (
              <img
                src={
                  props.content.sectionimage.imageFile.childImageSharp.original
                    .src
                }
                alt={props.content.sectionimage.altText}
                className="mb-0"
              />
            )}
          </div>
        </div>
      </div>
      <div className="container margin-one-top lg-margin-three-top md-no-margin-top">
        <div className="row">
          <div className="col-12 col-lg-4 text-center text-lg-left md-margin-40px-bottom sm-margin-30px-bottom">
            <h3 className="h-3 text-extra-dark-gray font-weight-600 alt-font mb-0">
              {props.content.maintitle}
            </h3>
          </div>
          {props.content.features.map(({ title, description }, index) => {
            return (
              <div
                key={index}
                className="col-12 col-lg-4 col-md-6 text-center text-lg-left sm-margin-30px-bottom wow fadeIn last-paragraph-no-margin"
              >
                <div className="row m-0">
                  <div className="col-12 col-lg-3 text-center md-no-padding-lr">
                    <h2 className="text-light-gray alt-font letter-spacing-minus-3 mb-0 md-margin-10px-bottom">
                      {("0" + (index + 1)).slice(-2)}
                    </h2>
                  </div>
                  <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-left md-no-margin-top sm-no-padding-lr">
                    <span className="alt-font text-medium text-extra-dark-gray margin-5px-bottom d-block">
                      {title}
                    </span>
                    <div className="width-80 lg-width-100">
                      {ReactHtmlParser(description)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Section8
