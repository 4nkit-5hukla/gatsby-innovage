import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import evento from "../assets/img/envato.png"
import magento from "../assets/img/magento.png"
import google from "../assets/img/google.png"
import shopify from "../assets/img/shopify.png"
import c1 from "../assets/img/c1.jpg"
import c2 from "../assets/img/c2.jpg"
import c3 from "../assets/img/c3.jpg"
import env from "../assets/img/env.png"
import mag from "../assets/img/mag.png"
import ping from "../assets/img/ping.png"
import yahoo from "../assets/img/yahoo.png"
import pint from "../assets/img/pint.png"
import amazon from "../assets/img/amazon.png"
import woo from "../assets/img/woo.png"
import wordpress from "../assets/img/wordpress.png"
import jquery from "../assets/img/jquery.png"





const OurClients = () => (
  <Layout>
    <SEO title="Our Clients" />
   <section className="wow fadeIn parallax bg-fixed our-clients-banner" data-stellar-background-ratio="0.5">
            <div className="layer bg-layer"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="z-index-9 col-12 extra-small-screen page-title-large d-flex flex-column justify-content-center text-center">
                        <h1 className="text-white-2 alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">Valuable clients</h1>
        
                        <span className="text-white-2 opacity6 alt-font">Unlimited power and customization possibilities</span>
                
                    </div>
                </div>
            </div>
        </section>
         <section className="wow fadeIn no-padding-bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                        <h3 className="h-3 alt-font font-weight-700 text-extra-dark-gray margin-15px-bottom text-uppercase">We’re fortunate to work with fantastic clients</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    </div>
                </div>              
            </div>
        </section>        
        <section className="wow fadeIn pt-0 clients-logo">
            <div className="container-fluid padding-five-lr">
                <div className="row">
               
                    <div className="col-12 col-xl-3 col-md-6 banner-style1 lg-margin-30px-bottom wow fadeInUp">
                        <figure className="bg-extra-dark-gray">
                            <div className="banner-image height-250px cover-background evento bg-image"> 
                            </div>
                            <figcaption>
                                <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 lg-margin-30px-bottom">
                                    <div><img src={evento} alt=""/></div>
                                    <p className="width-80 mx-auto text-medium-gray sm-width-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                  
                    <div className="col-12 col-xl-3 col-md-6 banner-style1 lg-margin-30px-bottom wow fadeInUp "  data-wow-delay="0.2s">
                        <figure className="bg-extra-dark-gray">
                            <div className="banner-image height-250px cover-background bg-image magento"> 
                            </div>
                            <figcaption>
                                <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 lg-margin-30px-bottom">
                                    <div><img src={magento} alt=""/></div>
                                    <p className="width-80 mx-auto text-medium-gray sm-width-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
              
                    <div className="col-12 col-xl-3 col-md-6 banner-style1 md-margin-30px-bottom wow fadeInUp "  data-wow-delay="0.4s">
                        <figure className="bg-extra-dark-gray">
                            <div className="banner-image height-250px cover-background bg-image google"> 
                            </div>
                            <figcaption>
                                <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 lg-margin-30px-bottom">
                                    <div><img src={google} alt=""/></div>
                                    <p className="width-80 mx-auto text-medium-gray sm-width-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
           
                    <div className="col-12 col-xl-3 col-md-6 banner-style1 wow fadeInUp "  data-wow-delay="0.6s">
                        <figure className="bg-extra-dark-gray">
                            <div className="banner-image height-250px cover-background bg-image shopify"> 
                            </div>
                            <figcaption>
                                <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 lg-margin-30px-bottom">
                                    <div><img src={shopify} alt=""/></div>
                                    <p className="width-80 mx-auto text-medium-gray sm-width-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
          
                </div>
            </div>
        </section>
       
        <section className="bg-light-gray">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                        <h3 className="h-3 alt-font font-weight-700 text-extra-dark-gray margin-20px-bottom text-uppercase">Our valuable client</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    </div>
                </div>
                <div className="row">
             
                    <div className="col-12 col-lg-4 col-md-6 wow fadeInUp">
                        <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom">
                            <Link to=""><img src={env} alt=""/></Link>
                        </div>
                    </div>
      
                    <div className="col-12 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom">
                            <Link to=""><img src={mag} alt=""/></Link>
                        </div>
                    </div>
          
                    <div className="col-12 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom">
                            <Link to=""><img src={ping} alt=""/></Link>
                        </div>
                    </div>
                   
                    <div className="col-12 col-lg-4 col-md-6 wow fadeInUp">
                        <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom">
                            <Link to=""><img src={yahoo} alt=""/></Link>
                        </div>
                    </div>
                
                    <div className="col-12 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom">
                            <Link to=""><img src={pint} alt=""/></Link>
                        </div>
                    </div>
               
                    <div className="col-12 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom">
                            <Link to=""><img src={amazon} alt=""/></Link>
                        </div>
                    </div>
    
                    <div className="col-12 col-lg-4 col-md-6 wow fadeInUp">
                        <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom">
                            <Link to=""><img src={woo} alt=""/></Link>
                        </div>
                    </div>
                 
                    <div className="col-12 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom">
                            <Link to=""><img src={wordpress} alt=""/></Link>
                        </div>
                    </div>
         
                    <div className="col-12 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="bg-white clients-list text-center d-flex align-items-center justify-content-center w-100 margin-30px-bottom md-no-margin">
                            <Link to=""><img src={jquery} alt=""/></Link>
                        </div>
                    </div>
        
                </div>
            </div>
        </section>
    
        <section className="wow fadeIn">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                        <h3 className="h-3 alt-font font-weight-700 text-extra-dark-gray margin-20px-bottom text-uppercase">Why work with us?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    </div>
                </div>
                <div className="row">
       
                    <div className="col-12 col-lg-3 col-md-6 md-margin-four-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin">
                        <div className="bg-white border-color-extra-medium-gray border-all text-center padding-eighteen-tb border-radius-4 position-relative h-100">
                            <div className="d-inline-block margin-20px-bottom"><i className="icon-tools text-white-2 icon-round-small bg-deep-pink"></i></div>
                            <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">Pixel Perfect Design</div>
                            <p className="width-75 mx-auto">Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                        </div>
                    </div>
               
                    <div className="col-12 col-lg-3 col-md-6 md-margin-four-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.2s">
                        <div className="bg-white border-color-extra-medium-gray border-all text-center padding-eighteen-tb border-radius-4 position-relative h-100">
                            <div className="d-inline-block margin-20px-bottom"><i className="icon-layers text-white-2 icon-round-small bg-deep-pink"></i></div>
                            <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">Full Documentation</div>
                            <p className="width-75 mx-auto">Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                        </div>
                    </div>
      
                    <div className="col-12 col-lg-3 col-md-6 sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.4s">
                        <div className="bg-white border-color-extra-medium-gray border-all text-center padding-eighteen-tb border-radius-4 position-relative h-100">
                            <div className="d-inline-block margin-20px-bottom"><i className="icon-scissors text-white-2 icon-round-small bg-deep-pink"></i></div>
                            <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">Reasonable Pricing</div>
                            <p className="width-75 mx-auto">Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                        </div>
                    </div>
          
                    <div className="col-12 col-lg-3 col-md-6 wow fadeInUp last-paragraph-no-margin" data-wow-delay="0.6s">
                        <div className="bg-white border-color-extra-medium-gray border-all text-center padding-eighteen-tb border-radius-4 position-relative h-100">
                            <div className="d-inline-block margin-20px-bottom"><i className="icon-lock text-white-2 icon-round-small bg-deep-pink"></i></div>
                            <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">User-friendly Admin</div>
                            <p className="width-75 mx-auto">Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                        </div>
                    </div>
 
                </div>
            </div>
        </section>

        <section className="wow fadeIn bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="alt-font text-medium-gray margin-5px-bottom text-uppercase text-small">what people says</p>
                        <h3 className="h-3 text-uppercase alt-font text-extra-dark-gray margin-20px-bottom font-weight-700 md-width-100">Testimonials</h3>
                        <span className="separator-line-horrizontal-medium-light2 bg-deep-pink d-table mx-auto width-100px"></span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7 col-lg-12 margin-100px-top md-margin-70px-top sm-margin-50px-top">
                        <div className="row">
                            <div className="col-12 col-lg-4 md-margin-two-bottom wow fadeIn last-paragraph-no-margin testimonial-style3">
                                <div className="testimonial-content-box padding-twelve-all bg-white border-radius-6 box-shadow arrow-bottom md-padding-seven-all sm-padding-eight-all">
                                    I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.
                                </div>
                            
                                <div className="testimonial-box padding-25px-all sm-padding-20px-all">
                                    <div className="image-box width-20"><img src={c1} className="rounded-circle" alt=""/></div>
                                    <div className="name-box padding-20px-left">
                                        <div className="alt-font font-weight-600 text-small text-uppercase text-extra-dark-gray">Shoko Mugikura</div>
                                        <p className="text-extra-small text-uppercase text-medium-gray">Graphic Designer</p>
                                    </div>
                                </div>
                            </div>
                     
                            <div className="col-12 col-lg-4 sm-margin-two-bottom wow fadeIn last-paragraph-no-margin testimonial-style3" data-wow-delay="0.2s">
                                <div className="testimonial-content-box padding-twelve-all bg-white border-radius-6 box-shadow arrow-bottom md-padding-seven-all sm-padding-eight-all">
                                    This is an excellent company! I personally enjoyed the energy and the professional support the whole team gave to us into creating website.
                                </div>
                                <div className="testimonial-box padding-25px-all sm-padding-20px-all">
                                    <div className="image-box width-20"><img src={c2} className="rounded-circle" alt=""/></div>
                                    <div className="name-box padding-20px-left">
                                        <div className="alt-font font-weight-600 text-small text-uppercase text-extra-dark-gray">Alexander Harvard</div>
                                        <p className="text-extra-small text-uppercase text-medium-gray">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="col-12 col-lg-4 wow fadeIn last-paragraph-no-margin testimonial-style3" data-wow-delay="0.4s">
                                <div className="testimonial-content-box padding-twelve-all bg-white border-radius-6 box-shadow arrow-bottom md-padding-seven-all sm-padding-eight-all">
                                    Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks again guys for all your hard work.
                                </div>
                                <div className="testimonial-box padding-25px-all sm-padding-20px-all">
                                    <div className="image-box width-20"><img src={c3} className="rounded-circle" alt=""/></div>
                                    <div className="name-box padding-20px-left">
                                        <div className="alt-font font-weight-600 text-small text-uppercase text-extra-dark-gray">Herman Miller</div>
                                        <p className="text-extra-small text-uppercase text-medium-gray">Co Founder / CEO</p>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div> 
            </div>
        </section>
  </Layout>
)

export default OurClients
