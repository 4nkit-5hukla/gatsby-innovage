import React from "react"

const Parallaxsection = props => {
  console.log(props)
  return (
    <section
      className="parallax big-section wow fadeIn"
      data-stellar-background-ratio="0.5"
      style={{
        backgroundImage: `url(${props.content.backgroundimage.imageFile.childImageSharp.original.src})`,
      }}
    >
      <div className="opacity-extra-medium bg-black"></div>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 text-center">
            <a
              href={props.content.link.url}
              target={props.content.link.target}
              title={props.content.link.title}
              className="popup-youtube"
            >
              <img
                src={
                  props.content.linkimage.imageFile.childImageSharp.original.src
                }
                className="width-30"
                alt={props.content.linkimage.altText}
              />
            </a>
            <h3 className="h-3 alt-font text-white-2">{props.content.title}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Parallaxsection
