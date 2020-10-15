import React from "react"
import ReactHtmlParser from "react-html-parser"

const Section1 = props => {
  return (
    <section
      id={props.id !== "" ? props.id : null}
      className="wow fadeIn no-padding-bottom"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
            <h3 className="h-3 alt-font font-weight-700 text-extra-dark-gray margin-15px-bottom text-uppercase">
              {props.content.title}
            </h3>
            {ReactHtmlParser(props.content.description)}
          </div>
        </div>
      </div>
      <div className="container-fluid padding-five-lr">
        <div className="row">
          {props.content.gridboxes.map(
            ({ boxbg, logo, description }, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-xl-3 col-md-6 banner-style1 lg-margin-30px-bottom wow fadeInUp"
                >
                  <figure className="bg-extra-dark-gray">
                    <div
                      className="banner-image height-250px cover-background bg-image"
                      style={{
                        backgroundImage: `url(${boxbg.imageFile.childImageSharp.original.src})`,
                      }}
                    />
                    <figcaption>
                      <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 lg-margin-30px-bottom">
                        <div>
                          <img
                            src={logo.imageFile.childImageSharp.original.src}
                            alt=""
                          />
                        </div>
                        <div className="width-80 mx-auto text-medium-gray sm-width-100">
                          {ReactHtmlParser(description)}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}
export default Section1
