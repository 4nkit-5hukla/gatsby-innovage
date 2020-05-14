import React from 'react'
import Slider from "react-slick"
import {Link} from "gatsby"
import {Container, Row, Col} from 'reactstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HomeBannerSlider = () => {
  const settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    centerMode: false,
    autoplay: true,
    slidesToShow: 1,
    fade:true,
    slidesToScroll: 1

  };
  return ( <div className="home-banner position-relative">
              
    <Slider {...settings}>
       <div className="home-banner-content bg-image home-slider slider-1">
       <div className="layer bg-layer"></div>
            <Container>
                <Row>
                    <div className="banner-data m-auto col-12 col-md-8 col-lg-6">
                        <span className="text-white MT-R opacity6 text-uppercase">We Work Hard, We Play Hard</span>
                        <h1 className="text-white MT-R pt-3">We are a web design agency</h1>
                         <p className="d-block mt-5 pt-0 pt-lg-5">
                             <Link to="" class="btn btn-transparent-white btn-small border-radius-4">EXPLORE WORK</Link>
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
         <div className="home-banner-content bg-image home-slider slider-2">
         <div className="layer bg-layer"></div>
              <Container>
                  <Row>
                      <div className="banner-data m-auto col-12 col-md-8 col-lg-6">
                          <span className="text-white MT-R opacity6">We provide innovative solutions to expand business</span>
                          <h1 className="text-white MT-R pt-3">A print & degital creative studio</h1>
                           <p className="d-block mt-5 pt-0 pt-lg-5">
                               <Link to="" class="btn btn-transparent-white btn-small border-radius-4">EXPLORE WORK</Link>
                          </p>
                      </div>
                  </Row>
              </Container>
          </div>
         <div className="home-banner-content bg-image home-slider slider-3">
         <div className="layer bg-layer"></div>
            <Container>
                <Row>
                    <div className="banner-data m-auto col-12 col-md-8 col-lg-6">
                        <span className="text-white MT-R opacity6">We provide innovative solutions to expand business</span>
                        <h1 className="text-white MT-R pt-3">We are delivering beautiful products</h1>
                         <p className="d-block mt-5 pt-0 pt-lg-5">
                             <Link to="" class="btn btn-transparent-white btn-small border-radius-4">EXPLORE WORK</Link>
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
      
    </Slider>
  </div>);

}
export default HomeBannerSlider;
