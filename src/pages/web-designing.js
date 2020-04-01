import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ca from "../assets/img/ca.jpg"
import ro from "../assets/img/ro.jpg"
import maulana from "../assets/img/maulana.jpg"
import aid from "../assets/img/aid.jpg"
import spark from "../assets/img/spark.jpg"
import social from "../assets/img/social.jpg"

export default (props) => {
  return (
    <>
    <Layout>
    <SEO title="Web Designing" />
    <section className="web-hosting">
        <div className="layer"></div>
        <Container>
            <Row>
                <div className="banner-content-inner">
                    <h1 className="PO-R text-white m-0 p-0">Web Designing</h1>
                </div>
            </Row>
        </Container>
    </section>
    <section className="py-3 py-lg-5 web-designing">
            <Container>
                <Row className="pb-0 pb-lg-4">
                  <Col className="col-sm-12 col-lg-10 m-auto text-center">
                      <h2 className="PO-R mb-3">We provide the best development of responsive websites that adapt themselves to the mode through which they are accessed.</h2>
                      <span className="hr-line"></span>
                  </Col>
                </Row>
                <Row className="no-gutters my-3 my-lg-5">
                    <div className="bx-shadow col-12 col-xl-4 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.6s">
                        <div className="pricing-heading">
                            <div className="pricing-plan MT-R text-white text-center text-uppercase py-2">Starter Website</div>
                            <div className="pricing-price py-3 py-lg-4 text-center text-white MT-B">
                                <p className="starting-from MT-R text-white mb-0">Starting From</p> 
                                <span> <sup className="PO-R">Rs</sup>6000</span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul className="p-0 m-0 list-unstyled MT-R text-center">
                                <li>5-8 SEO friendly pages</li>
                                <li>Image Slider on Home Page</li>
                                <li>500 MB Hosting Space</li>
                                <li>5 Free email accounts</li>
                                <li>MySQL PHP Programming</li>
                                <li>Live Support for 1 Year</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bx-shadow medium col-12 col-xl-4 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.6s">
                        <div className="pricing-heading">
                            <div className="pricing-plan MT-R text-white text-center medium-plan text-uppercase">Database Driven Website</div>
                            <div className="pricing-price py-3 py-lg-4 text-center text-white MT-B">
                                <p className="starting-from MT-R text-white mb-0">Starting From</p> 
                                <span> <sup className="PO-R">Rs</sup>15000</span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul className="p-0 m-0 list-unstyled MT-R text-center">
                                <li>10-15 SEO friendly pages</li>
                                <li>Image Slider on Home Page</li>
                                <li>1 GB Hosting Space</li>
                                <li>10 Free email accounts</li>
                                <li>Complete Visitor Stats</li>
                                <li>Logo Design</li>
                                <li>Database Admin and Members Area</li>
                                <li>Add Edit Delete pages yourself</li>
                                <li>Live Support for 1 Year</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bx-shadow col-12 col-xl-4 col-md-6 last-paragraph-no-margin lg-margin-30px-bottom wow fadeInLeft" data-wow-delay="0.6s">
                        <div className="pricing-heading">
                            <div className="pricing-plan MT-R text-white text-center text-uppercase py-2">e-Commerce Website</div>
                            <div className="pricing-price py-3 py-lg-4 text-center text-white MT-B">
                                <p className="starting-from MT-R text-white mb-0">Starting From</p> 
                                <span> <sup className="PO-R">Rs</sup>35000</span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul className="p-0 m-0 list-unstyled MT-R text-center">
                                <li>20-25 SEO friendly pages</li>
                                <li>Image Slider on Home Page</li>
                                <li>5 GB Hosting Space</li>
                                <li>10 Free email accounts</li>
                                <li>Complete Visitor Stats</li>
                                <li>Logo Design</li>
                                <li>Animated Menu</li>
                                <li>MySQL PHP Programming</li>
                                <li>Database Admin and Members Area</li>
                                <li>Database Driven Automatic Pages</li>
                                <li>Add Edit Delete pages yourself</li>
                                <li>Live Support for 1 Year</li>
                                <li>Shopping Cart</li>
                                <li>Payment Gateway</li>
                            </ul>
                        </div>
                    </div>
                </Row>
                <Row className="text-center d-block">
                     <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Browse Template</Link>
                </Row>
            </Container>
        </section>
        <section>
        <div className="jumbotron mb-0 border border-left-0 border-right-0 rounded-0" style={{backgroundColor:'#f7f7f7'}}>
            <Container>
                <Row>
                    <Col className="col-12 col-md-10 text-center text-md-left PO-R short-contact">
                        <h2 className="PO-R text-uppercase" style={{color:'#ff214f'}}>Need a new website or re-design existing website?</h2>
                        <p className="mb-0 MT-R">
                            Click the button to fill up a Request Form. We will send you a quotation immediately.
                        </p>
                    </Col>
                    <Col className="col-12 col-md-2 text-center text-md-right">
                        <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Request Form</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
    <section className="web-design py-3 py-lg-5">
        <Container>
            <Row>
                <Col className="col-12 col-lg-9">
                    <Row>
                        <Col className="col-sm-12 col-lg-10 m-auto text-center">
                         <h2 className="PO-R mb-3">Our Portfolio</h2>
                         <span className="hr-line"></span>
                         </Col>
                     </Row>
                     <Row className="pt-5">
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="feature-box-16 sm-width-100">
                        <img className="img-fluid" src={ca} alt="" className="mb-0"/>
                        <div className="feature-box-content text-center">
                            <div className="opacity-full-dark bg-extra-dark-gray"></div>
                            <div className="px-3 d-table h-100 w-100 position-relative">
                                <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                                    <div className="portfolio-title text-white-2 alt-font text-medium margin-15px-bottom text-white py-3 PO-R font-weight-bold">
                                           Central Academy
                                     </div> 
                                    <p className="width-85 mx-auto text-white MT-R">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
                   
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="feature-box-16 sm-width-100">
                            <img className="img-fluid" src={aid} alt="" className="mb-0"/>
                            <div className="feature-box-content text-center text-white-2">
                                <div className="opacity-full-dark bg-extra-dark-gray"></div>
                                <div className="px-3 d-table h-100 w-100 position-relative">
                                    <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                                        <div className="portfolio-title text-white-2 alt-font text-medium margin-15px-bottom text-white py-3 PO-R font-weight-bold">
                                            Archit Infradesign
                                          </div> 
                                        <p className="width-85 mx-auto text-white MT-R">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="feature-box-16 sm-width-100">
                            <img className="img-fluid" src={spark} alt="" className="mb-0"/>
                            <div className="feature-box-content text-center text-white-2">
                                <div className="opacity-full-dark bg-extra-dark-gray"></div>
                                <div className="px-3 d-table h-100 w-100 position-relative">
                                    <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                                        <div className="portfolio-title text-white-2 alt-font text-medium margin-15px-bottom text-white py-3 PO-R font-weight-bold">
                                            SPARK
                                        </div> 
                                        <p className="width-85 mx-auto text-white MT-R">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="feature-box-16 sm-width-100">
                            <img className="img-fluid" src={social} alt="" className="mb-0"/>
                            <div className="feature-box-content text-center">
                                <div className="opacity-full-dark bg-extra-dark-gray"></div>
                                <div className="px-3 d-table h-100 w-100 position-relative">
                                    <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                                        <div className="portfolio-title text-white-2 alt-font text-medium margin-15px-bottom text-white py-3 PO-R font-weight-bold">
                                            Social Justices & Women…
                                          </div> 
                                        <p className="width-85 mx-auto text-white MT-R">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                   
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="feature-box-16 sm-width-100">
                            <img className="img-fluid" src={ro} alt="" className="mb-0"/>
                            <div className="feature-box-content text-center text-white-2">
                                <div className="opacity-full-dark bg-extra-dark-gray"></div>
                                <div className="px-3 d-table h-100 w-100 position-relative">
                                    <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                                        <div className="portfolio-title text-white-2 alt-font text-medium margin-15px-bottom text-white py-3 PO-R font-weight-bold">
                                           Indian RO
                                        </div> 
                                        <p className="width-85 mx-auto text-white MT-R">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="feature-box-16 sm-width-100">
                            <img className="img-fluid" src={maulana} alt="" className="mb-0"/>
                            <div className="feature-box-content text-center text-white-2">
                                <div className="opacity-full-dark bg-extra-dark-gray"></div>
                                <div className="px-3 d-table h-100 w-100 position-relative">
                                    <div className="align-middle d-table-cell padding-15px-lr padding-20px-tb">
                                        <div className="portfolio-title text-white-2 alt-font text-medium margin-15px-bottom text-white py-3 PO-R font-weight-bold">
                                            Maulana Azad PG College
                                        </div> 
                                        <p className="width-85 mx-auto text-white MT-R">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          
                </Row> 
                <Row className="text-center d-block">
                     <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Browse Template</Link>
                </Row>
                </Col>
                <Col className="col-12 col-lg-3 pl-3 pl-lg-5 mt-5 mt-lg-0">
                    <div className="port-right-sidebar-top">
                        <h3 className="MT-R text-dark text-uppercase" style={{fontSize:'14px'}}>Our Services</h3>
                        <ul className="px-0 m-0 list-unstyled footer-links border right-sidebar-portfolio">
                            <li><Link to="" className="position-relative">Web Hosting</Link></li>
                            <li><Link to="" className="position-relative">Web Designing</Link></li>
                            <li><Link to="" className="position-relative">Customized Software</Link></li>
                            <li><Link to="" className="position-relative">SEO AND SEM</Link></li>
                        </ul>
                    </div>
                     <div className="port-right-sidebar-bottom pt-3 pt-lg-5">
                            <h3 className="MT-R text-dark text-uppercase" style={{fontSize:'14px'}}>Request A Quote</h3>
                        <form className="sidebar-form" action="/action_page.php">
                          <input type="text" id="name" name="name" placeholder="Name" />
                          <input type="email" id="email" name="email" placeholder="Email" />
                          <textarea id="message" name="message" placeholder="Type your message..."></textarea>
                          <input type="text" id="captcha" name="captcha" placeholder="Enter Captcha" />
                          <input type="submit" value="SEND MESSAGE" className="MT-R btn border-radius-4 margin-30px-top"/>
                        </form>
                     </div>
                </Col>
            </Row>
        </Container>
    </section>
   
  </Layout>
</>
  );
};
