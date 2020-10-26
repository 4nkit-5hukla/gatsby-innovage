import React from "react"
import ReactHtmlParser from "react-html-parser"

const Section9 = props => {
  return (
    <section id={props.id !== "" ? props.id : null} className="p-0 wow fadeIn">
      <div className="container-fluid">
        <div className="row">
          {props.content.portfolios.map(
            (
              { bgImage, thinTitle, mainTitle, description, readMoreLink },
              index
            ) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className="col-12 col-lg-3 p-0 d-flex align-items-center position-relative bg-extra-dark-gray text-center text-lg-left wow fadeIn"
                    data-wow-delay="0.2s"
                  >
                    <div className="padding-fifteen-all lg-padding-ten-all sm-padding-30px-all width-100">
                      <div className="alt-font text-extra-large margin-20px-bottom text-white-2 width-90 lg-width-100 sm-margin-15px-bottom">
                        {mainTitle}
                      </div>
                      <div className="text-color-2">
                        {ReactHtmlParser(description)}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-lg-3 p-0 cover-background position-relative md-height-500px sm-height-300px wow fadeIn"
                    style={{
                      backgroundImage: `url(${bgImage.imageFile.childImageSharp.original.src})`,
                    }}
                  ></div>
                </React.Fragment>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}
export default Section9
