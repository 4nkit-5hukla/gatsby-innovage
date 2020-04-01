import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import desk from "../assets/img/desktop1.png"

export default (props) => {
  return (
    <>
     <Layout>
    <SEO title="Customized Software Development" />
    <section className="web-hosting">
        <div className="layer"></div>
        <Container>
            <Row>
                <div className="banner-content-inner">
                    <h1 className="PO-R text-white m-0 p-0">Customized Software Development</h1>
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
                         <h2 className="PO-R mb-3">We develop custom software as per your need</h2>
                         <span className="hr-line"></span>
                         <p className="MT-R">
                          We have a proven track record of satisfied customers and lowest total cost of software development. Our team first works with the employees of the organizations to understand their business. After thorough understanding, our experts suggest best possible solution, which can then be customized as per the business requirements. Our centralized data solution saves the employee time and decreases the requirement of staff to do particular tasks.
                      </p>
                         </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col className="col-12 text-center">
                             <img className="img-fluid" src={desk} alt="" />
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
   
  </Layout>
</>
  );
};