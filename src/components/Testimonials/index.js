import React from "react"
import ReactHtmlParser from 'react-html-parser'

const Testimonials = props => {
  return (
    <section className="wow fadeIn bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="alt-font text-medium-gray margin-5px-bottom text-uppercase text-small">
              {props.content.thintitle}
            </p>
            <h3 className="h-3 text-uppercase alt-font text-extra-dark-gray margin-20px-bottom font-weight-700 md-width-100">
              {props.content.maintitle}
            </h3>
            <span className="separator-line-horrizontal-medium-light2 bg-deep-pink d-table mx-auto width-100px"></span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 col-lg-12 margin-100px-top md-margin-70px-top sm-margin-50px-top">
            <div className="row">
              {props.content.testimonialdata.map(
                ({ testimonialcontent, avatar, name, designation }, index) => {
                  return (
                    <div
                      key={index}
                      className="col-12 col-lg-4 md-margin-two-bottom wow fadeIn last-paragraph-no-margin testimonial-style3"
                    >
                      <div className="testimonial-content-box padding-twelve-all bg-white border-radius-6 box-shadow arrow-bottom md-padding-seven-all sm-padding-eight-all">
                        {ReactHtmlParser(testimonialcontent)}
                      </div>

                      <div className="testimonial-box padding-25px-all sm-padding-20px-all">
                        <div className="image-box width-20">
                          <img
                            src={avatar.imageFile.childImageSharp.original.src}
                            className="rounded-circle"
                            alt={avatar.altText}
                          />
                        </div>
                        <div className="name-box padding-20px-left">
                          <div className="alt-font font-weight-600 text-small text-uppercase text-extra-dark-gray">
                            {name}
                          </div>
                          <p className="text-extra-small text-uppercase text-medium-gray">
                            {designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Testimonials
