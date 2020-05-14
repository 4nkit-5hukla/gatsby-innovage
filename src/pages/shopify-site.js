import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import group from "../assets/img/group.jpg"
import icon1 from "../assets/img/icon1.png"
import icon2 from "../assets/img/icon2.png"
import icon3 from "../assets/img/icon3.png"
import device from "../assets/img/device.png"
import v_icon from "../assets/img/video-icon.png"
import effect3 from "../assets/img/effect3.jpg"
import effect2 from "../assets/img/effect2.jpg"
import effect1 from "../assets/img/effect1.jpg"
import DevelopmentBannerSlider from "../components/DevelopmentBannerSlider"

const ShopifySite = () => (
  <Layout>
    <SEO title="Shopify Site" />
        <section className="p-0">
  
             <DevelopmentBannerSlider />
        
    </section>
        <section className="wow fadeIn lg-padding-two-lr md-no-padding-lr">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-8 col-lg-9 margin-eight-bottom text-center last-paragraph-no-margin">
                        <div className="alt-font text-deep-pink margin-10px-bottom text-uppercase text-small">Find more creative ideas for your projects</div>
                        <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600 mb-0">Build perfect websites, Beautifully handcrafted templates for your website</h3>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xl-4 col-md-6 margin-six-bottom lg-margin-six-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin">
                        <div className="feature-box-5 position-relative">
                            <i className="icon-desktop text-medium-gray icon-medium"></i>
                            <div className="feature-content">
                                <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Web Development</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-md-6 margin-six-bottom lg-margin-six-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.2s">
                        <div className="feature-box-5 position-relative">
                            <i className="icon-pricetags text-medium-gray icon-medium"></i>
                            <div className="feature-content">
                                <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Logo and Identity</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-md-6 margin-six-bottom lg-margin-six-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.4s">
                        <div className="feature-box-5 position-relative">
                            <i className="icon-pictures text-medium-gray icon-medium"></i>
                            <div className="feature-content">
                                <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Graphics Design</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-md-6 md-margin-six-bottom lg-margin-six-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin">
                        <div className="feature-box-5 position-relative ">
                            <i className="icon-mobile text-medium-gray icon-medium"></i>
                            <div className="feature-content">
                                <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">App Development</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-md-6 sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.2s">
                        <div className="feature-box-5 position-relative">
                            <i className="icon-target text-medium-gray icon-medium"></i>
                            <div className="feature-content">
                                <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Social Marketing</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-md-6 wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.4s">
                        <div className="feature-box-5 position-relative">
                            <i className="icon-tools text-medium-gray icon-medium"></i>
                            <div className="feature-content">
                                <div className="text-extra-dark-gray margin-10px-bottom alt-font font-weight-600">Content Creation</div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="parallax big-section video-player-bg wow fadeIn" data-stellar-background-ratio="0.5">
            <div className="opacity-extra-medium bg-black"></div>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 text-center">
                        <a href="https://www.youtube.com/watch?v=nrJtHemSPW4" target="_blank" className="popup-youtube"><img src={v_icon} className="width-30" alt=""/></a>
                        <h3 className="h-3 alt-font text-white-2">Unique. Powerful. Creative.</h3>
                    </div>
                </div>
            </div>
        </section>
        <section className="wow fadeIn last-paragraph-no-margin">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-8 col-lg-9 margin-eight-bottom text-center last-paragraph-no-margin">
                        <div className="alt-font text-deep-pink margin-10px-bottom text-uppercase text-small">Technology Expert Analysis</div>
                        <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600 mb-0">We provide high quality and cost effective offshore web development services</h3>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 sm-margin-30px-bottom wow fadeInUp">
                        <div className="feature-box-16 sm-width-100">
                            <img src={effect3} alt="" className="mb-0"/>
                            <div className="feature-box-content text-center">
                                <div className="opacity-full-dark bg-extra-dark-gray"></div>
                                <div className="d-table h-100 w-100 position-relative">
                                    <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                                        <div className="text-white-2 alt-font text-medium margin-15px-bottom">We believe in creativity</div> 
                                        <p className="width-85 mx-auto text-extra-light-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="col-12 col-md-4 sm-margin-30px-bottom wow fadeInUp" data-wow-delay="0.25s">
                        <div className="feature-box-16 sm-width-100">
                            <img src={effect2} alt="" className="mb-0"/>
                            <div className="feature-box-content text-center text-white-2">
                                <div className="opacity-full-dark bg-extra-dark-gray"></div>
                                <div className="d-table h-100 w-100 position-relative">
                                    <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                                        <div className="text-white-2 alt-font text-medium margin-15px-bottom">We believe in quality</div> 
                                        <p className="width-85 mx-auto text-extra-light-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="feature-box-16 sm-width-100">
                            <img src={effect1} alt="" className="mb-0"/>
                            <div className="feature-box-content text-center text-white-2">
                                <div className="opacity-full-dark bg-extra-dark-gray"></div>
                                <div className="d-table h-100 w-100 position-relative">
                                    <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                                        <div className="text-white-2 alt-font text-medium margin-15px-bottom">We believe in relation</div> 
                                        <p className="width-85 mx-auto text-extra-light-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <section className="bg-extra-dark-gray">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-xl-3 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.6s">
                        <div className="padding-40px-lr text-center border-right border-width-1 border-color-medium-dark-gray lg-no-border-right sm-padding-15px-lr">
                            <h3 className="h-3 text-deep-pink MT-R">01</h3>
                            <span className="text-color-2 alt-font d-block text-uppercase text-small">Save your Time</span>
                            <span className="text-white-2 text-uppercase alt-font text-extra-large font-weight-700 margin-20px-bottom d-block">Best Services</span>
                            <p className="text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.4s">
                        <div className="padding-40px-lr text-center border-right border-color-medium-dark-gray lg-no-border-right sm-padding-15px-lr">
                            <h3 className="h-3 text-deep-pink MT-R">02</h3>
                            <span className="text-color-2 alt-font d-block text-uppercase text-small">All you Need</span>
                            <span className="text-white-2 text-uppercase alt-font text-extra-large font-weight-700 margin-20px-bottom d-block">Professional</span>
                            <p className="text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 last-paragraph-no-margin md-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="padding-40px-lr text-center border-right border-color-medium-dark-gray lg-no-border-right sm-padding-15px-lr">
                            <h3 className="h-3 text-deep-pink MT-R">03</h3>
                            <span className="text-color-2 alt-font d-block text-uppercase text-small">Dedicated Supports</span>
                            <span className="text-white-2 text-uppercase alt-font text-extra-large font-weight-700 margin-20px-bottom d-block">Support</span>
                            <p className="text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 last-paragraph-no-margin wow fadeInLeft">
                        <div className="padding-40px-lr text-center sm-padding-15px-lr">
                            <h3 className="h-3 text-deep-pink MT-R">04</h3>
                            <span className="text-color-2 alt-font d-block text-uppercase text-small">Creative Thinking</span>
                            <span className="text-white-2 text-uppercase alt-font text-extra-large font-weight-700 margin-20px-bottom d-block">Digital Marketing</span>
                            <p className="text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={device} alt="" className="mb-0"/>
                    </div>
                </div>
            </div>
            <div className="container margin-one-top lg-margin-three-top md-no-margin-top">  
                <div className="row">
                    <div className="col-12 col-lg-4 text-center text-lg-left md-margin-40px-bottom sm-margin-30px-bottom">
                        <h3 className="h-3 text-extra-dark-gray font-weight-600 alt-font mb-0">The world's most powerful wordpress website builder</h3>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 text-center text-lg-left sm-margin-30px-bottom wow fadeIn last-paragraph-no-margin" data-wow-delay="0.2s">
                        <div className="row m-0">
                            <div className="col-12 col-lg-3 text-center md-no-padding-lr">
                                <h2 className="text-light-gray alt-font letter-spacing-minus-3 mb-0 md-margin-10px-bottom">01</h2>
                            </div>
                            <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-left md-no-margin-top sm-no-padding-lr">
                                <span className="alt-font text-medium text-extra-dark-gray margin-5px-bottom d-block">Modern Framework</span>
                                <p className="width-80 lg-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 text-center text-lg-left wow fadeIn last-paragraph-no-margin" data-wow-delay="0.4s">
                        <div className="row m-0">
                            <div className="col-12 col-lg-3 text-center sm-no-padding-lr">
                                <h2 className="text-light-gray alt-font letter-spacing-minus-3 mb-0 md-margin-10px-bottom">02</h2>
                            </div>
                            <div className="col-12 col-lg-9 margin-5px-top text-center text-lg-left md-no-margin-top sm-no-padding-lr">
                                <span className="alt-font text-medium text-extra-dark-gray margin-5px-bottom d-block">Live Website Builder</span>
                                <p className="width-80 lg-width-100">Lorem Ipsum is simply text the printing and typesetting standard industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-light-gray wow fadeIn">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                        <h3 className="h-3 alt-font font-weight-600 text-extra-dark-gray">Subscribe to our newsletter</h3>
                        <p className="width-65 mx-auto md-width-100"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.</p>
                        <form id="subscribenewsletterform" action="javascript:void(0)" method="post" className="position-relative">
                            <div id="success-subscribe-newsletter" className="no-margin-lr"></div>
                            <div className="input-group margin-40px-tb">
                                <input name="email" id="email" data-email="required" type="text" placeholder="* Email Address" className="extra-big-input border-0 form-control" />
                                <div className="input-group-append">
                                    <button id="button-subscribe-newsletter" type="submit" className="btn btn-large bg-white text-deep-pink"><i className="ti-email icon-small m-0"></i></button>
                                </div>
                            </div>
                        </form>
                        <span className="text-extra-small">* We don't share your personal info with anyone. Check out our <a href="#" className="text-decoration-underline">Privacy Policy</a> for more information.</span>
                    </div>
                </div>
            </div>
        </section>
  </Layout>
)

export default ShopifySite
