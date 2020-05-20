import React from "react"
import ReactHtmlParser from "react-html-parser"

const Contactform = props => {
  console.log(props)
  return (
    <section className="wow fadeIn big-section" id="section-down">
      <div className="container">
        <div className="row">
          <div
            className={
              props.content.formposition === "left"
                ? "col-12 col-lg-6 md-margin-30px-bottom wow fadeInLeft"
                : "col-12 col-lg-6 md-margin-30px-bottom wow order-last fadeInRight"
            }
          >
            <div className="padding-fifteen-all bg-light-gray border-radius-6 lg-padding-seven-all sm-padding-30px-all h-100">
              <span className="text-extra-dark-gray alt-font text-large font-weight-600 margin-25px-bottom d-block">
                Ready to get started?
              </span>
              <form id="contact-form" method="post">
                <div>
                  <div id="success-contact-form" className="mx-0"></div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name*"
                    required
                    className="w-100 mb-3 border-radius-4 bg-white medium-input"
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="E-mail*"
                    required
                    className="w-100 mb-3 border-radius-4 bg-white medium-input"
                  />
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="w-100 mb-3 border-radius-4 bg-white medium-input"
                  />
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Your Message"
                    rows="5"
                    className="w-100 mb-3 border-radius-4 bg-white medium-textarea"
                  ></textarea>
                  <button
                    id="contact-us-button"
                    type="submit"
                    className="btn btn-small border-radius-4 btn-dark-gray"
                  >
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6 last-paragraph-no-margin wow fadeInRight">
            <div className="padding-ten-all bg-light-gray border-radius-6 lg-padding-seven-all sm-padding-30px-all h-100 text-center text-lg-left">
              <img
                src={props.content.image.imageFile.childImageSharp.original.src}
                alt={props.content.image.altText}
                className="border-radius-6 margin-35px-bottom sm-margin-30px-bottom"
              />
              <span className="text-large font-weight-600 alt-font text-extra-dark-gray margin-5px-bottom d-block">
                {props.content.title}
              </span>
              {ReactHtmlParser(props.content.infodescription)}
              <a
                href="/"
                className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-25px-top"
              >
                {props.content.infobutton.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contactform
