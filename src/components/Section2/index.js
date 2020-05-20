import React from "react"
import ReactHtmlParser from 'react-html-parser'

const Section2 = props => {
  console.log(props)
  return (
    <section
      className="wow fadeIn cover-background md-no-background-img bg-image bg-medium-light-gray"
      style={{
        backgroundImage: `url(${props.content.backgroundImage.imageFile.childImageSharp.original.src})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-6 wow fadeIn">
            <div className="row m-0">
              <div className="col-12 text-center text-lg-left sm-no-padding-lr last-paragraph-no-margin margin-60px-bottom md-margin-30px-bottom">
                <span className="text-medium text-deep-pink alt-font margin-10px-bottom d-inline-block">
                  {props.content.thinTitle}
                </span>
                <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600">
                  {props.content.boldTitle}
                </h3>
                <div className="width-90 md-width-100">
                  {ReactHtmlParser(props.content.description)}
                </div>
              </div>
              {props.content.grid.map(({ icon, title, description }, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md-6 sm-margin-30px-bottom last-paragraph-no-margin sm-no-padding-lr text-center text-lg-left"
                  >
                    {ReactHtmlParser(icon)}
                    <div className="feature-content">
                      <div className="alt-font font-weight-600 text-extra-dark-gray margin-5px-bottom">
                        {title}
                      </div>
                      <div className="width-80 lg-width-90 md-width-100">
                        {ReactHtmlParser(description)}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section2
