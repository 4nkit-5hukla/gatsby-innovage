import React from "react"

const Calltoaction = props => {
  return (
    <section className="wow fadeIn">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7 col-lg-8 col-md-10 text-center">
            <h3 className="h-3 alt-font text-extra-dark-gray text-uppercase font-weight-500 width-80 mx-auto margin-35px-bottom lg-width-100 wow fadeInUp">
              {props.content.title}
            </h3>
            <a
              href={props.content.button.url}
              className="btn btn-medium btn-rounded btn-deep-pink wow fadeInUp"
              data-wow-delay="0.2s"
            >
              {props.content.button.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Calltoaction
