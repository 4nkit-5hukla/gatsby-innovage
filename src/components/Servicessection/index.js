import React from "react"
import ReactHtmlParser from "react-html-parser"

const Servicessection = props => {
  console.log(props)
  return (
    <section className="bg-extra-dark-gray">
      <div className="container-fluid">
        <div className="row">
          {props.content.services.map(
            ({ thintitle, title, description }, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-xl-3 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft"
                >
                  <div className="padding-40px-lr text-center border-right border-width-1 border-color-medium-dark-gray lg-no-border-right sm-padding-15px-lr">
                    <h3 className="h-3 text-deep-pink MT-R">
                      {("0" + (index + 1)).slice(-2)}
                    </h3>
                    <span className="text-color-2 alt-font d-block text-uppercase text-small">
                      {thintitle}
                    </span>
                    <span className="text-white-2 text-uppercase alt-font text-extra-large font-weight-700 margin-20px-bottom d-block">
                      {title}
                    </span>
                    <div className="text-color-2">
                      {ReactHtmlParser(description)}
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}
export default Servicessection
