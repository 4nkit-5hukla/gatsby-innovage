import React, { useState } from "react"
import ReactHtmlParser from "react-html-parser"
import { useStaticQuery, graphql } from "gatsby"
import { Alert } from "reactstrap"

const Contactform = props => {
  const [invalidFields, setInvalidFields] = useState(null)
  const [responseColor, setResponseColor] = useState("")
  const [responseContent, setResponseContent] = useState(false)
  const [responseVisible, setResponseVisible] = useState(false)
  const [responseErrorVisible, setResponseErrorVisible] = useState(false)
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            wpUrl
          }
        }
      }
    `
  )
  const dismissResponse = () => {
    setResponseVisible(false)
    setResponseContent(false)
  }
  const dismissErrorResponse = () => {
    setResponseErrorVisible(false)
    setResponseContent(false)
  }
  const response = (
    <Alert
      className="rounded-0"
      isOpen={responseVisible}
      toggle={dismissResponse}
      color={responseColor}
    >
      {responseContent}
    </Alert>
  )
  const response_Error = (
    <Alert
      className="rounded-0"
      isOpen={responseErrorVisible}
      toggle={dismissErrorResponse}
      color={responseColor}
    >
      {responseContent}
    </Alert>
  )
  const sendFormData = async (URL, fromEle, fromData) => {
    fetch(URL, {
      method: "POST",
      body: fromData,
    })
      .then(response => {
        response.json().then(responseJson => {
          setResponseContent(responseJson.message)
          if (responseJson.status === "validation_failed") {
            setResponseColor("warning")
            console.log(responseJson)
            if (responseJson.invalid_fields !== null) {
              setInvalidFields(responseJson.invalid_fields)
              responseJson.invalid_fields.forEach(Field => {
                document
                  .getElementById(Field.into.split(".").pop())
                  .classList.add("border-danger")
                document
                  .getElementById(Field.into.split(".").pop())
                  .setAttribute("title", Field.message)
              })
            }
          }
          if (responseJson.status === "mail_sent") {
            setResponseColor("success")
            fromEle.reset()
          }
          setResponseVisible(true)
        })
      })
      .catch(error => {
        console.error(error)
      })
  }
  const formSubmit = (event) => {
    event.preventDefault()
    dismissResponse()
    dismissErrorResponse()
    if (invalidFields !== null) {
      invalidFields.forEach(Field => {
        document
          .getElementById(Field.into.split(".").pop())
          .classList.remove("border-danger")
        document
          .getElementById(Field.into.split(".").pop())
          .removeAttribute("title")
      })
    }
    const wpUrl = site.siteMetadata.wpUrl
    const formId = props.content.formid
    const apiPath = `${wpUrl
      .split(":")
      .pop()}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback/`
    const fromEle = event.target
    const fromData = new FormData(event.target)
    sendFormData(apiPath, fromEle, fromData)
  }
  return (
    <section id={props.id !== "" ? props.id : null} className="wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {props.content.sectionSubTitle !== null && (
              <p className="alt-font margin-5px-bottom text-uppercase text-small text-medium-gray">
                {props.content.sectionSubTitle}
              </p>
            )}
            {props.content.sectionTitle !== null && (
              <h3 className="h-3 text-uppercase alt-font text-extra-dark-gray margin-10px-top margin-20px-bottom font-weight-700 md-width-100 sm-width-100">
                {props.content.sectionTitle}
              </h3>
            )}
            {props.content.sectionTitle !== null && (
              <span className="separator-line-horizontal-medium-light2 bg-deep-pink d-table mx-auto width-100px" />
            )}
          </div>
        </div>
        <div
          className={`row ${
            props.content.sectionTitle !== null
              ? `margin-100px-top md-margin-70px-top sm-margin-50px-top`
              : null
          }`}
        >
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
              <form
                id="contact-form"
                method="post"
                encType="multipart/form-data"
                onSubmit={e => formSubmit(e)}
              >
                <div>
                  <div id="success-contact-form" className="mx-0"></div>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Full Name*"
                    className="w-100 mb-3 border-radius-4 bg-white medium-input"
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="E-mail*"
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
                    Send Message
                  </button>
                </div>
                <div className="response">
                  {response}
                  {response_Error}
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
