import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



export default (props) => {
  return (
    <>
  <Layout>
    <SEO title="For Schools" />
   <section className="web-hosting p-0 m-0">
        <div className="layer"></div>
        <Container>
            <Row>
                <div className="banner-content-inner">
                    <h1 className="PO-R text-white m-0 p-0">For Schools</h1>
                </div>
            </Row>
        </Container>
    </section>
    <section className="py-3 py-lg-5">
        <Container>
            <Row className="pb-0 pb-lg-4">
              <Col className="col-sm-12 col-lg-10 m-auto text-center">
                  <h2 className="PO-R mb-3">Simple, Powerful & Affordable School Management System</h2>
                  <span className="hr-line"></span>
                  <p className="mb-0 MT-R pt-3 pt-lg-5">
                        Innovage School Management System is a comprehensive school management software, designed particularly for small and medium schools. The School Management System is designed to automate a school’s different day to day tasks, making them fast, easy, efficient and accurate.
                  <br/><br/>

                    For online learning solutions we have developed several modules that can be reorganized according to the school work flow. Create lessons into courses and tests and assignments. Manage books, fees and financial accounting of school, from admission to issuance of TC all is included based on school needs.
                  </p>
              </Col>
            </Row>
        </Container>
    </section>
    <section className="bg-extra-dark-gray py-5">
            <Container>
                 <Row className="pb-0 pb-lg-4">
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3 text-white">Features of Innovage School Management System</h2>
                      <span className="hr-line"></span>
                  </Col>
                </Row>
                <Row className="pt-3 pt-lg-5">
                    <div className="col-12 col-lg-4 wow fadeInLeft">
                        <div className="text-center">
                            <h3 className="font-weight-300 letter-spacing-minus-2 text-deep-pink alt-font margin-10px-bottom">01</h3>
                            <span className="alt-font d-block text-uppercase text-small">Save your Time</span>
                            <span className="text-white-2 text-uppercase alt-font text-extra-large font-weight-700 margin-20px-bottom d-block">Best Services</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 wow fadeInLeft border border-top-0 border-bottom-0">
                        <div className="text-center">
                            <h3 className="font-weight-300 letter-spacing-minus-2 text-deep-pink alt-font margin-10px-bottom">02</h3>
                            <span className="alt-font d-block text-uppercase text-small">All you Need</span>
                            <span className="text-white-2 text-uppercase alt-font text-extra-large font-weight-700 margin-20px-bottom d-block">Professional</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 wow fadeInLeft">
                        <div className="text-center">
                            <h3 className="font-weight-300 letter-spacing-minus-2 text-deep-pink alt-font margin-10px-bottom">03</h3>
                            <span className="alt-font d-block text-uppercase text-small">Dedicated Supports</span>
                            <span className="text-white-2 text-uppercase alt-font text-extra-large font-weight-700 margin-20px-bottom d-block">Support</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
   
  </Layout>
</>
  );
};
