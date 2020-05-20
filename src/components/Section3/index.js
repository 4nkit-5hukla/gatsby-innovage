import React from "react"
import ReactHtmlParser from "react-html-parser"

const Section3 = props => {
  console.log(props)
  return (
    <section className="wow fadeIn">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 margin-eight-bottom text-center last-paragraph-no-margin">
            <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600">
              {props.content.title}
            </h3>
            <div className="width-80 d-inline-block sm-width-100">
              {ReactHtmlParser(props.content.description)}
            </div>
          </div>
        </div>
        <div className="row">
          {props.content.iconBoxes.map(({ icon, title, description }, index) => {
            return (
              <div
                key={index}
                className="col-12 col-lg-3 col-md-6 md-margin-four-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin"
              >
                <div className="bg-white border-color-extra-medium-gray border text-center padding-eighteen-tb border-radius-4 position-relative h-100">
                  <div className="d-inline-block margin-20px-bottom">
                    {ReactHtmlParser(icon)}
                  </div>
                  <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
                    {title}
                  </div>
                  <div className="width-75 mx-auto">
                    {ReactHtmlParser(description)}
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
export default Section3
