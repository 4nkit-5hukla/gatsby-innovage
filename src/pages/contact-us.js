import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contact_img_right from "../assets/img/contact-img-right.jpg"
import ContactUsSlider from "../components/ContactUsSlider"

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
        <section className="p-0">
  
             <ContactUsSlider />
        
    	</section>
        <section className="wow fadeIn big-section" id="section-down">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 md-margin-30px-bottom wow fadeInLeft">
                        <div className="padding-fifteen-all bg-light-gray border-radius-6 lg-padding-seven-all sm-padding-30px-all h-100">
                            <span className="text-extra-dark-gray alt-font text-large font-weight-600 margin-25px-bottom d-block">Ready to get started?</span> 
                            <form id="contact-form" action="javascript:void(0)" method="post">
                                <div>
                                    <div id="success-contact-form" className="mx-0"></div>
                                    <input type="text" name="name" id="name" placeholder="Name*" required className="w-100 mb-3 border-radius-4 bg-white medium-input"/>
                                    <input type="text" name="email" id="email" placeholder="E-mail*" required className="w-100 mb-3 border-radius-4 bg-white medium-input"/>
                                    <input type="text" name="subject" id="subject" placeholder="Subject" className="w-100 mb-3 border-radius-4 bg-white medium-input"/>
                                    <textarea name="comment" id="comment" placeholder="Your Message" rows="5" className="w-100 mb-3 border-radius-4 bg-white medium-textarea"></textarea>
                                    <button id="contact-us-button" type="submit" className="btn btn-small border-radius-4 btn-dark-gray">send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 last-paragraph-no-margin wow fadeInRight">
                        <div className="padding-ten-all bg-light-gray border-radius-6 lg-padding-seven-all sm-padding-30px-all h-100 text-center text-lg-left">
                            <img src={contact_img_right} alt="" className="border-radius-6 margin-35px-bottom sm-margin-30px-bottom"/>
                            <span className="text-large font-weight-600 alt-font text-extra-dark-gray margin-5px-bottom d-block">Let's plan for a new project?</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum has been the standard dummy text.</p>
                            <a href="/" className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-25px-top">About Company</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-0 bg-light-gray wow fadeIn">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-4 image-hover-style-3 h-100 last-paragraph-no-margin">
                        <div className="feature-box-wrap">
                            <div className="con1 w-100 d-table position-relative cover-background small-screen sm-height-300px"></div>
                            <div className="w-100 small-screen sm-height-300px d-table arrow-top">
                                <div className="d-table-cell align-middle padding-eighteen-lr lg-padding-twelve-lr text-center md-padding-ten-lr sm-padding-seven-all">
                                    <i className="icon-map text-deep-pink icon-medium margin-25px-bottom"></i>
                                    <div className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-5px-bottom">Contact Address</div>
                                    <p className="width-55 mx-auto text-medium lg-width-100">301 The Greenhouse, Custard Factory, London, E2 8DY.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 image-hover-style-3 height-100 last-paragraph-no-margin">
                        <div className="feature-box-wrap md-swap-block">
                            <div className="w-100 small-screen sm-height-300px d-table arrow-bottom">
                                <div className="d-table-cell align-middle padding-eighteen-lr lg-padding-twelve-lr text-center md-padding-ten-lr sm-padding-seven-all">
                                    <i className="icon-chat text-deep-pink icon-medium margin-25px-bottom"></i>
                                    <div className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-5px-bottom">Let's Talk</div>
                                    <p className="mx-auto text-medium mb-0">Phone: 1-800-222-000</p>
                                    <p className="mx-auto text-medium">Fax: 1-800-222-002</p>
                                </div>
                            </div>
                            <div className="con3 w-100 d-table position-relative cover-background small-screen sm-height-300px"></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 image-hover-style-3 height-100 last-paragraph-no-margin">
                        <div className="feature-box-wrap">
                            <div className="con3 w-100 d-table position-relative cover-background small-screen sm-height-300px"></div>
                            <div className="w-100 small-screen sm-height-300px d-table arrow-top">
                                <div className="d-table-cell align-middle padding-eighteen-lr lg-padding-twelve-lr text-center md-padding-ten-lr sm-padding-seven-all">
                                    <i className="icon-envelope text-deep-pink icon-medium margin-25px-bottom"></i>
                                    <div className="text-extra-dark-gray text-uppercase alt-font font-weight-600 margin-5px-bottom">Email Us</div>
                                    <p className="mx-auto text-medium mb-0"><a href="mailto:info@domain.com">info@domain.com</a></p>
                                    <p className="mx-auto text-medium"><a href="mailto:hire@domain.com">hire@domain.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
        <section className="wow fadeIn">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-7 col-lg-8 col-md-10 text-center">
                        <h3 className="h-3 alt-font text-extra-dark-gray text-uppercase font-weight-500 width-80 mx-auto margin-35px-bottom lg-width-100 wow fadeInUp">We would love to hear about start your new project?</h3>
                        <a href="/" className="btn btn-medium btn-rounded btn-deep-pink wow fadeInUp" data-wow-delay="0.2s">Start New Projects</a>
                    </div>
                </div>
            </div>
        </section>
  </Layout>
)

export default ContactUs
