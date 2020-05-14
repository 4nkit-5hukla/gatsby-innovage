import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../assets/img/logo.png"

const Maintenance = () => (
  <Layout>
    <SEO title="Maintenance" />
         <section  className="p-0 cover-background bg-fixed maintenance-sec">
            <div className="opacity-full bg-black"></div>
            <div className="container position-relative full-screen">
                <div className="slider-typography text-center">
                    <div className="slider-text-middle-main sm-padding-15px-lr">
                        <div className="slider-text-middle">
                            <span className="alt-font title-extra-large font-weight-700 text-uppercase d-block text-deep-pink margin-15px-bottom">Sorry!</span>
                            <div className="position-relative overflow-hidden width-50 sm-width-80 mx-auto margin-eight-bottom">
                                <span className="text-large text-white text-uppercase">We're down for maintenance</span>
                            </div>
                            <h5 className="alt-font text-uppercase text-white-2 font-weight-600">we'll be back shortly</h5>
                            <div className="social-icon-style-10 margin-30px-top">
                                <ul className="medium-icon">
                                    <li><a className="facebook text-white-2" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-f"></i><span></span></a></li>
                                    <li><a className="twitter text-white-2" href="http://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i><span></span></a></li>
                                    <li><a className="google text-white-2" href="http://www.google.com" target="_blank"><i className="fa fa-google-plus"></i><span></span></a></li> 
                                    <li><a className="linkedin text-white-2" href="http://www.linkedin.com" target="_blank"><i className="fa fa-linkedin"></i><span></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </Layout>
)

export default Maintenance
