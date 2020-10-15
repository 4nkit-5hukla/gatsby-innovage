import React from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import { Container, Row } from "reactstrap"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const BannerSlider = props => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    centerMode: false,
    autoplay: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
  }
  return (
    <div
      id={props.id !== "" ? props.id : null}
      className="home-banner position-relative"
    >
      <Slider {...settings}>
        {props.slides.map((slide, index) => {
          if (slide.enable) {
            return (
              <div key={index} className="home-banner-content bg-image">
                <div className="bg-layer">
                  <img
                    className="img-fluid mb-0"
                    src={slide.image.imageFile.childImageSharp.original.src}
                    height={
                      slide.image.imageFile.childImageSharp.original.height
                    }
                    width={slide.image.imageFile.childImageSharp.original.width}
                    alt={slide.image.altText}
                  />
                </div>
                <Container className="banner-data">
                  <Row>
                    <div className="m-auto col-12 col-md-8 col-lg-6">
                      <span className="text-white MT-R opacity6 text-uppercase">
                        {slide.title}
                      </span>
                      <h1 className="text-white MT-R pt-3">{slide.subTitle}</h1>
                      {slide.link !== null && (
                        <p className="d-block mt-5 pt-0 pt-lg-5">
                          <Link
                            to={slide.link.url}
                            target={
                              slide.link.target !== "" ? slide.link.target : ""
                            }
                            className="btn btn-transparent-white btn-small border-radius-4"
                          >
                            {slide.link.title}
                          </Link>
                        </p>
                      )}
                    </div>
                  </Row>
                </Container>
              </div>
            )
          } else {
            return false
          }
        })}
      </Slider>
    </div>
  )
}
export default BannerSlider
