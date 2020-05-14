import React from 'react'
import Slider from "react-slick"
import {Link} from "gatsby"
import {Container, Row, Col} from 'reactstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const DevelopmentBannerSlider = () => {
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
                        <span className="text-white MT-R opacity6 text-uppercase">We provide innovative solutions to expand business</span>
                        <h1 className="text-white MT-R pt-3">We have been helping build brands</h1>
                         
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
                          <h1 className="text-white MT-R pt-3">We have been helping build brands</h1>
                          
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
                        <h1 className="text-white MT-R pt-3">We have been helping build brands</h1>
                         
                    </div>
                </Row>
            </Container>
        </div>
      
    </Slider>
  </div>);

}
export default DevelopmentBannerSlider;
