import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import seo from "../assets/img/seo.png"

export default (props) => {
  return (
    <>
     <Layout>
    <SEO title="SEO AND SEM" />
    <section className="banner-for-all">
        <div className="layer"></div>
        <Container>
            <Row>
                <div className="banner-content-inner">
                    <h1 className="PO-R text-white m-0 p-0">SEO AND SEM</h1>
                </div>
            </Row>
        </Container>
    </section>
    <section className="web-design py-3 py-lg-5">
        <Container>
            <Row>
                <Col className="col-12 col-lg-9">
                    <Row>
                        <Col className="col-sm-12 col-lg-10 m-auto text-center">
                            <h2 className="PO-R mb-3">improve your brands visibility in the marketplace.</h2>
                            <span className="hr-line"></span>
                            <p className="MT-R pt-3 pt-lg-5">
                                When you are looking for an extremely affordable way to promote your website and generate traffic, you will find that SEO marketing is the way to go. This type of internet marketing has become extremely popular over the past few year and because of its power, has been shown to be an extremely beneficial service.
                            </p>
                        </Col>
                        <Col className="col-12 seo-section text-center">
                              <img src={seo} alt="SEO" />
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col className="col-12 text-center">
                            
                        </Col>
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
    <section>
        <div className="jumbotron mb-0 border border-left-0 border-right-0 rounded-0" style={{backgroundColor:'#f7f7f7'}}>
            <Container>
                <Row>
                    <Col className="col-12 col-md-9 text-center text-md-left PO-R short-contact">
                        <h2 className="PO-R text-uppercase" style={{color:'#ff214f'}}>Need SEO service?</h2>
                        <p className="mb-0 MT-R">
                           Contact us and our team will get in touch with you to get your site ranking up and higer
                        </p>
                    </Col>
                    <Col className="col-12 col-md-3 text-center text-md-right">
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