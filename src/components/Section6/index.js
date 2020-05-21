import React from "react"
import ReactHtmlParser from "react-html-parser"

const Section6 = props => {
  return (
    <section className="wow fadeIn lg-padding-two-lr md-no-padding-lr">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8 col-lg-9 margin-eight-bottom text-center last-paragraph-no-margin">
            <div className="alt-font text-deep-pink margin-10px-bottom text-uppercase text-small">
              {props.content.thintitle}
            </div>
            <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600 mb-0">
              {props.content.maintitle}
            </h3>
          </div>
        </div>
        <div className="row">
          {props.content.iconBoxes.map(
            ({ icon, title, description }, index) => {
              return (
                <div
                  key={index}
                  className={
                    index < 3
                      ? "col-12 col-xl-4 col-md-6 margin-six-bottom lg-margin-six-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin"
                      : "col-12 col-xl-4 col-md-6 md-margin-six-bottom lg-margin-six-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin"
                  }
                >
                  <div className="feature-box-5 position-relative">
                    {ReactHtmlParser(icon)}
                    <div className="feature-content">
                      <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">
                        {title}
                      </div>
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
export default Section6
