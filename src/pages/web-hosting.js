import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



export default (props) => {
  return (
    <>
  <Layout>
    <SEO title="Web Hosting" />
   <section className="banner-for-all p-0 m-0">
        <div className="layer"></div>
        <Container>
            <Row>
                <div className="banner-content-inner">
                    <h1 className="PO-R text-white m-0 p-0">Web Hosting</h1>
                </div>
            </Row>
        </Container>
    </section>
    <section className="py-3 py-lg-5">
            <Container>
                <Row className="pb-0 pb-lg-4">
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3">Choose one of our fine-tuned Linux based Web Hosting solutions!</h2>
                      <span className="hr-line"></span>
                  </Col>
                </Row>
                <Row className="no-gutters my-3 my-lg-5">
                    <div className="bx-shadow col-12 col-xl-3 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.6s">
                        <div className="pricing-heading">
                            <div className="pricing-plan MT-R text-white text-center text-uppercase py-2">Starter</div>
                            <div className="pricing-price py-3 py-lg-4 text-center text-white MT-B"> 
                                <span> <sup className="PO-R">Rs</sup>1000<sub className="PO-R">Yearly</sub> </span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul className="p-0 m-0 list-unstyled MT-R text-center">
                                <li>500 MB Storage</li>
                                <li>5 MySQL Databases</li>
                                <li>10 GB Transfer</li>
                                <li>cPanel Control Panel</li>
                                <li>Enhanced Security</li>
                                <li>Free SSL and SSD</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bx-shadow col-12 col-xl-3 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.6s">
                        <div className="pricing-heading">
                            <div className="pricing-plan MT-R text-white text-center text-uppercase py-2">Low</div>
                            <div className="pricing-price py-3 py-lg-4 text-center text-white MT-B"> 
                                <span> <sup className="PO-R">Rs</sup>1500<sub className="PO-R">Yearly</sub> </span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul className="p-0 m-0 list-unstyled MT-R text-center">
                                <li>1 GB Storage</li>
                                <li>10 MySQL Databases</li>
                                <li>15 GB Transfer</li>
                                <li>cPanel Control Panel</li>
                                <li>Enhanced Security</li>
                                <li>Free SSL and SSD</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bx-shadow medium col-12 col-xl-3 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.6s">
                        <div className="pricing-heading">
                            <div className="pricing-plan MT-R text-white text-center medium-plan text-uppercase">Medium</div>
                            <div className="pricing-price py-3 py-lg-4 text-center text-white MT-B"> 
                                <span> <sup className="PO-R">Rs</sup>2000<sub className="PO-R">Yearly</sub> </span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul className="p-0 m-0 list-unstyled MT-R text-center">
                                <li>5 GB Storage</li>
                                <li>20 MySQL Databases</li>
                                <li>Unlimited Transfer</li>
                                <li>cPanel Control Panel</li>
                                <li>Enhanced Security</li>
                                <li>Free SSL and SSD</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bx-shadow col-12 col-xl-3 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.6s">
                        <div className="pricing-heading">
                            <div className="pricing-plan MT-R text-white text-center text-uppercase py-2">Ultimate</div>
                            <div className="pricing-price py-3 py-lg-4 text-center text-white MT-B"> 
                                <span> <sup className="PO-R">Rs</sup>2500<sub className="PO-R">Yearly</sub> </span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul className="p-0 m-0 list-unstyled MT-R text-center">
                                <li>Unlimited Storage</li>
                                <li>Unlimited Databases</li>
                                <li>Unlimited Transfer</li>
                                <li>cPanel Control Panel</li>
                                <li>Enhanced Security</li>
                                <li>Free SSL and SSD</li>
                            </ul>
                        </div>
                    </div>
                </Row>
                <Row className="text-center d-block">
                     <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Request a Quote</Link>
                </Row>
            </Container>
        </section>
        <section>
        <div className="jumbotron mb-0 border border-left-0 border-right-0" style={{backgroundColor:'#f7f7f7'}}>
            <Container>
                <Row>
                    <Col className="col-12 col-md-10 text-center text-md-left PO-R short-contact">
                        <h2 className="PO-R text-uppercase" style={{color:'#ff214f'}}>Need more hosting options?</h2>
                        <p className="mb-0 MT-R">
                            We offer other hosting packages also. You can contact us any time through email, call or by filling up the contact form, and we will send you a quotation.
                        </p>
                    </Col>
                    <Col className="col-12 col-md-2 text-center text-md-right">
                        <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Contact Us</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
   
  </Layout>
</>
  );
};
