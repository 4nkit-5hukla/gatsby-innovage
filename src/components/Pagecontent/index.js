import React from "react"
import ReactHtmlParser from "react-html-parser"

const PageContent = props => {
  return (
    <section id={props.id !== "" ? props.id : null} className="wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-12">{ReactHtmlParser(props.content)}</div>
        </div>
      </div>
    </section>
  )
}
export default PageContent
