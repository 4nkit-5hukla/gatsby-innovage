import React from "react"
import ReactHtmlParser from "react-html-parser"

const Section7 = props => {
  return (
    <section
      id={props.id !== "" ? props.id : null}
      className="wow fadeIn last-paragraph-no-margin"
    >
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
          {props.content.showcases.map(
            ({ image, title, description }, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-md-4 sm-margin-30px-bottom wow fadeInUp"
                >
                  <div className="feature-box-16 sm-width-100">
                    {image !== null && (
                      <img
                        src={image.imageFile.childImageSharp.original.src}
                        alt={image.altText}
                        className="mb-0"
                      />
                    )}
                    <div className="feature-box-content text-center">
                      <div className="opacity-full-dark bg-extra-dark-gray"></div>
                      <div className="d-table h-100 w-100 position-relative">
                        <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                          <div className="text-white-2 alt-font text-medium margin-15px-bottom">
                            {title}
                          </div>
                          <div className="width-85 mx-auto text-extra-light-gray">
                            {ReactHtmlParser(description)}
                          </div>
                        </div>
                      </div>
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
export default Section7
