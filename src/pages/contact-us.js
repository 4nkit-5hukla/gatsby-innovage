import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



export default (props) => {
  return (
    <>
  <Layout>
    <SEO title="Contact Us" />
   <section className="contact-us p-0 m-0">
        <div className="layer"></div>
        <Container>
            <Row>
                <div className="banner-content-inner">
                    <h1 className="PO-R text-white m-0 p-0">Contact Us</h1>
                </div>
            </Row>
        </Container>
    </section>
    <section className="py-3 py-lg-5">
        <Container>
            <Row className="pb-0 pb-lg-4">
              <Col className="col-sm-12 col-lg-10 m-auto text-center">
                  <h2 className="PO-R mb-3">About Us</h2>
                  <span className="hr-line"></span>
                  <p className="mb-0 MT-R pt-3 pt-lg-5">
                       Innovage Softwares was founded in 2005 with the goal to provide learning solutions to our customers with an eye on future. Innovage Softwares Inc. has expert in design and creation of learning solutions in several formats and systems. From Examiner to School Management System we have it all.
                  <br/> <br/>
                  Innovage Softwares Inc. is working with foreign and local companies in creating new websites and improve existing websites. Our mission allows us to work from creating small to large website by choosing the right strategy. We are business-centric and employ design processes and concepts with latest technology to keep your site abreast. Creating brand and loyalty of customers is our goal. Clarity, credibility, creativity, and carefully crafted customer services stimulates consumers to establish and accept your brand.
                  </p>
              </Col>
            </Row>
        </Container>
    </section>
    <section className="wow fadeIn big-section" id="section-down">
        <Container>
            <Row>
                <div className="col-12 col-lg-6">
                    <div className="h-100 contact-form-outer p-3 p-lg-5 rounded">
                        <h2 className="PO-R d-block">Get In Touch</h2> 
                        <form id="contact-form" action="javascript:void(0)" method="post" className="MT-R contact-page-form m-0">
                            <div>
                                <div id="success-contact-form" className="mx-0"></div>
                                <input type="text" name="email" id="email" placeholder="Your Email*" required className=""/>
                                <input type="text" name="subject" id="subject" placeholder="Subject" className=""/>
                                <textarea name="message" id="message" placeholder="Type your message here.." rows="5" className="border-radius-4 bg-white medium-textarea"></textarea>
                                <button id="contact-us-button" type="submit" className="btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="h-100 contact-form-outer p-3 p-lg-5"> 
                        <div style={{width:'100%'}}>
                             <iframe title="Innovage Softwares" width="100%" height="300" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=109-1320%2C%20Missisauga%20Valley%20Blvd%20Missisauga%2C%20%20L5A3S9%2C%20Ontario%2C%20Canada+(Innovage%20Softwares)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                        <h2 className="MT-R d-block">Let's plan for a new project?</h2>
                        
                    </div>
                </div>
            </Row>
        </Container>
    </section>
    <section className="try-more-feat py-5">
            <Container>
                <Row>
                    <Col className="col-12">
                        <div className="bottom-content text-center">
                          <h2 className="PO-R mb-3">Our Offices</h2>
                          <span className="hr-line"></span>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-3 pt-lg-5">
                    <Col className="col-12 col-lg-4">
                        <div className="text-center m-auto border rounded p-4">
                                <h3>CANADA</h3>
                                <p className="MT-R mb-3 d-block text-dark text-left">
                                109-1320, Missisauga Valley Blvd <br/>
                                Missisauga,  L5A3S9, Ontario, Canada <br/>
                                (T): (+1)-647-853-0482 <br/>
                                (E):enquiry@innovagesoftwares.com
                                </p>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-4 my-4 my-lg-0">
                        <div className="text-center m-auto border rounded p-4">
                                <h3>DELHI</h3>
                                <p className="MT-R mb-3 d-block text-dark text-left">
                               
                                </p>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <div className="text-center m-auto border rounded p-4">
                                <h3>GORAKHPUR</h3>
                                <p className="MT-R mb-3 d-block text-dark text-left">
                                Afaq Building, Dharmshala Bazar, <br/>
                                Gorakhpur, 273001,  Uttar Pradesh<br/>
                               (T): 0551-2200002 <br/>
                                (E):enquiry@innovagesoftwares.com
                                </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
         <section className="timing">
            <div className="jumbotron contact-short-sec mb-0 rounded-0">
                <Container>
                    <Row className="">
                        <Col className="col-12 col-md-6 text-left text-md-right PO-R short-contact pr-0 pr-lg-5 pl-3">
                            <h3>Business Hours</h3>
                            <p className="mb-0 MT-R">Monday – Saturday: 10:00 AM to 6:00 PM</p>
                             <p className="mb-0 MT-R">Sunday: Closed</p>
                        </Col>
                        <Col className="col-12 col-md-6 text-left pl-3 pl-lg-5 border border-top-0 border-right-0 border-bottom-0">
                            <h3>For Sales Enquiry</h3>
                            <a href="tel:+91 737 9505 684" className="d-block text-decoration-none text-dark">T. +91 737 9505 684</a>
                            <a href="mailto:sales@innovagesoftwares.com" className="d-block text-decoration-none text-dark">E. sales@innovagesoftwares.com</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    
   
  </Layout>
</>
  );
};
