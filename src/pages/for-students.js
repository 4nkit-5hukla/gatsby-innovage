import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import x from "../assets/img/x.png"
import o_book from "../assets/img/o-book.png"
import explain from "../assets/img/explain.png"



export default (props) => {
  return (
    <>
  <Layout>
    <SEO title="For Students" />
   <section className="banner-for-all p-0 m-0">
        <div className="layer"></div>
        <Container>
            <Row>
                <div className="banner-content-inner">
                    <h1 className="PO-R text-white m-0 p-0">For Students</h1>
                </div>
            </Row>
        </Container>
    </section>
    <section className="py-3 py-lg-5">
        <Container>
            <Row className="pb-0 pb-lg-4">
              <Col className="col-sm-12 col-lg-10 m-auto text-center">
                  <h2 className="PO-R mb-3">Preparing For Competitive Exams?</h2>
                  <span className="hr-line"></span>
                  <p className="mb-0 MT-R pt-3 pt-lg-5">
                        If you are preparing for competitive exams like BANK PO, CLERK, SSC or for entrance exams like CLAT and CAT, you must be studying very hard. But to assess your preparation level and know the trends of exams, you must take mock tests regularly. We have prepared a comprehensive set of Mock Tests, Previous Year Papers and Basic Study Materials. Just go to IndiaTests, register yourself and start practicing.
                  <br/><br/>

                    Basic subject preparation will improve your lookout for gaining access to a system of your dream job. Analyze and reflect after each test. This will improve your grades in standardized tests. Track your marks and time taken to complete each test.
                  </p>
              </Col>
            </Row>
        </Container>
    </section>
    <section className="bg-extra-dark-gray py-5 sms">
            <Container>
                 <Row className="pb-4">
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3 text-white">Benefits to Students</h2>
                      <span className="hr-line"></span>
                  </Col>
                </Row>
                <Row className="pt-3 pt-lg-5">
                    <div className="col-12 col-lg-4 wow fadeInLeft py-0 py-lg-3">
                        <div className="text-center">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={o_book} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <h3 className="PO-R text-uppercase text-white mt-3 mt-lg-5">Study Material</h3>
                            <p className="m-0 p-0 MT-R text-white">We have prepared learning materials with all basic tests on topics from Verb, Adverb, Noun to Basic concepts in Mathematics and English</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 wow fadeInLeft border border-top-0 border-bottom-0 py-0 py-lg-3 my-5 my-lg-0">
                        <div className="text-center">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={explain} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <h3 className="PO-R text-uppercase text-white mt-3 mt-lg-5">Explanations</h3>
                            <p className="m-0 p-0 MT-R text-white">Most of the answers contains detailed explanations with them, to explain the logic behind each answer, so you get a clear grasp of the subject</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 wow fadeInLeft py-0 py-lg-3">
                        <div className="text-center">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={x} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <h3 className="PO-R text-uppercase text-white mt-3 mt-lg-5">Question Bank</h3>
                            <p className="m-0 p-0 MT-R text-white">We have prepared a question bank of more than 20,000 questions from different subjects and topics for BANK PO, CLERK, SSC, CLAT, CAT and more</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    <section>
        <div className="jumbotron mb-0 border border-left-0 border-right-0" style={{backgroundColor:'#f7f7f7'}}>
            <Container>
                <Row>
                    <Col className="col-12 col-md-10 text-center text-md-left PO-R short-contact">
                        <h2 className="PO-R text-uppercase" style={{color:'#ff214f'}}>Start Practicing Now!! </h2>
                    </Col>
                    <Col className="col-12 col-md-2 text-center text-md-right">
                        <a href="https://indiatests.in/" className="MT-R btn border-radius-4 margin-30px-top">Go To IndiaTests</a>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
   
  </Layout>
</>
  );
};
