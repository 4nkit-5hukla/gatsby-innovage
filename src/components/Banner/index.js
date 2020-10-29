import React from "react"

const Banner = props => {
  return (
    <section
      id={props.id !== "" ? props.id : null}
      className="wow fadeIn parallax bg-fixed"
      data-stellar-background-ratio="0.5"
      style={{
        backgroundImage:
          props.content.bgimage !== null
            ? `url(${props.content.bgimage.imageFile.childImageSharp.original.src})`
            : `none`,
      }}
    >
      <div className="layer bg-layer"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="z-index-9 col-12 extra-small-screen page-title-large d-flex flex-column justify-content-center text-center">
            <h1 className="text-white-2 alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">
              {props.content.title}
            </h1>

            <span className="text-white-2 opacity6 alt-font">
              {props.content.subtitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner
