import React from "react"
import { Link } from "gatsby"

const Clientsgrid = props => {
  return (
    <section id={props.id !== "" ? props.id : null} className="bg-light-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
            <h3 className="h-3 alt-font font-weight-700 text-extra-dark-gray margin-20px-bottom text-uppercase">
              {props.content.title}
            </h3>
            <p>{props.content.subtitle}</p>
          </div>
        </div>
        <div className="row">
          {props.content.clients.map(({ link, logo }, index) => {
            if (logo) {
              return (
                <div
                  key={index}
                  className="col-12 col-lg-4 col-md-6 wow fadeInUp"
                >
                  <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom">
                    <Link to={link.url} title={link.title}>
                      <img
                        src={logo.imageFile.childImageSharp.original.src}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
    </section>
  )
}
export default Clientsgrid
