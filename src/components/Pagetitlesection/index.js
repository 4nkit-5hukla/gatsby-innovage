import React from "react"

const PageTitleSection = props => {
  return (
    <section
      id={props.id !== "" ? props.id : null}
      className="wow fadeIn cover-background background-position-top top-space"
    >
      <div className="opacity-medium bg-extra-dark-gray" />
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 d-flex flex-column text-center justify-content-center page-title-large padding-30px-tb">
            <h1 class="alt-font text-white-2 font-weight-600 mb-0">{props.title}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PageTitleSection
