import React from "react"
import ReactHtmlParser from "react-html-parser"

const Contactgrid = props => {
  return (
    <section
      id={props.id !== "" ? props.id : null}
      className="py-0 bg-light-gray wow fadeIn"
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12 col-lg-4 image-hover-style-3 h-100 last-paragraph-no-margin">
            <div className="feature-box-wrap">
              <div
                className="w-100 d-table position-relative cover-background small-screen sm-height-300px"
                style={{
                  backgroundImage: `url(${props.content.left.image.imageFile.childImageSharp.original.src})`,
                }}
              />
              <div className="w-100 small-screen sm-height-300px d-table arrow-top">
                <div className="d-table-cell align-middle padding-eighteen-lr lg-padding-twelve-lr text-center md-padding-ten-lr sm-padding-seven-all">
                  {ReactHtmlParser(props.content.left.icon)}
                  <div className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-5px-bottom">
                    {props.content.left.title}
                  </div>
                  <div className="width-55 mx-auto text-medium lg-width-100">
                    {ReactHtmlParser(props.content.left.description)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 image-hover-style-3 height-100 last-paragraph-no-margin">
            <div className="feature-box-wrap md-swap-block">
              <div className="w-100 small-screen sm-height-300px d-table arrow-bottom">
                <div className="d-table-cell align-middle padding-eighteen-lr lg-padding-twelve-lr text-center md-padding-ten-lr sm-padding-seven-all">
                  {ReactHtmlParser(props.content.center.icon)}
                  <div className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-5px-bottom">
                    {props.content.center.title}
                  </div>
                  <div className="mx-auto text-medium">
                    {ReactHtmlParser(props.content.center.description)}
                  </div>
                </div>
              </div>
              <div
                className="w-100 d-table position-relative cover-background small-screen sm-height-300px"
                style={{
                  backgroundImage: `url(${props.content.center.image.imageFile.childImageSharp.original.src})`,
                }}
              />
            </div>
          </div>
          <div className="col-12 col-lg-4 image-hover-style-3 height-100 last-paragraph-no-margin">
            <div className="feature-box-wrap">
              <div
                className="w-100 d-table position-relative cover-background small-screen sm-height-300px"
                style={{
                  backgroundImage: `url(${props.content.right.image.imageFile.childImageSharp.original.src})`,
                }}
              />
              <div className="w-100 small-screen sm-height-300px d-table arrow-top">
                <div className="d-table-cell align-middle padding-eighteen-lr lg-padding-twelve-lr text-center md-padding-ten-lr sm-padding-seven-all">
                  {ReactHtmlParser(props.content.right.icon)}
                  <div className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-5px-bottom">
                    {props.content.right.title}
                  </div>
                  <div className="width-55 mx-auto text-medium lg-width-100">
                    {ReactHtmlParser(props.content.right.description)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contactgrid
