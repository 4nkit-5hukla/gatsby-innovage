import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import language from "../assets/img/language.png"
import friend from "../assets/img/friends.png"
import cheap from "../assets/img/cheap.png"
import staff from "../assets/img/staff.png"
import team from "../assets/img/team.png"
import wallet from "../assets/img/wallet.png"
import watch from "../assets/img/watch.png"
import x from "../assets/img/x.png"
import homework from "../assets/img/homework.png"
import lessons from "../assets/img/lesson.png"

export default (props) => {
  return (
    <>
  <Layout>
    <SEO title="For Coachings" />
   <section className="banner-for-all p-0 m-0">
        <div className="layer"></div>
        <Container>
            <Row>
                <div className="banner-content-inner">
                    <h1 className="PO-R text-white m-0 p-0">For Coachings</h1>
                </div>
            </Row>
        </Container>
    </section>
    <section className="py-3 py-lg-5">
        <Container>
            <Row className="pb-0 pb-lg-4">
              <Col className="col-sm-12 col-lg-10 m-auto text-center">
                  <h2 className="PO-R mb-3">Affordable Online Examination and Student Management System</h2>
                  <span className="hr-line"></span>
                  <p className="mb-0 MT-R pt-3 pt-lg-5">
                        In today’s era of competitive exams being conducted online, we have designed Online Examination System which can be used by coaching institutes, tuition centers and individual teachers. You can manage your students, batches, conduct online exams and assess their performance through various reports.
                  <br/><br/>

                    What more, you can subscribe to plans of your choice from BANK PO, CLERK, CLAT and CAT and more.
                  </p>
              </Col>
            </Row>
        </Container>
    </section>
    <section className="bg-extra-dark-gray py-5 sms">
            <Container>
                 <Row className="pb-4">
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3 text-white">Features of Innovage Coaching System</h2>
                      <span className="hr-line"></span>
                  </Col>
                </Row>
                <Row className="pt-3 pt-lg-5">
                    <div className="col-12 col-lg-4 wow fadeInLeft py-0 py-lg-3">
                        <div className="text-center">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={watch} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <h3 className="PO-R text-uppercase text-white mt-3 mt-lg-5">MOCK TESTS</h3>
                            <p className="m-0 p-0 MT-R text-white">We have created various mock tests and test series with model papers and previous year questions for you.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 wow fadeInLeft border border-top-0 border-bottom-0 py-0 py-lg-3 my-5 my-lg-0">
                        <div className="text-center">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={language} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <h3 className="PO-R text-uppercase text-white mt-3 mt-lg-5">Web Based</h3>
                            <p className="m-0 p-0 MT-R text-white">Innovage Coaching System is totally web based so you do not have to install anything on your computer.</p>
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
                            <p className="m-0 p-0 MT-R text-white">With ICS subscription, you will also get access to a database of more than 20,000 questions from different subjects.</p>
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
                          <h2 className="PO-R">Looking For More Features?</h2>
                          <a href="https://easycoachingapp.com/coaching_system_features/" className="MT-R btn border-radius-4 margin-30px-top">See More Features</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="wow fadeIn modules module-for-coaching py-5">
            <Container>
                <Row>
                    <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3 text-dark">Modules</h2>
                      <span className="hr-line"></span>
                  </Col>
                </Row>
                <Row className="pt-5 mt-5">
                    <div className="col-12 col-lg-3 col-md-6w wow fadeInUp mb-5">
                        <div className="bg-white border text-center px-3 pb-3 h-100 mt-3">
                           <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={friend} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="PO-R text-dark text-uppercase my-4 box-title">Users</div>
                            <p className="MT-R mx-auto">Manage all your users and admins, assign roles, create permissions and more.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6w wow fadeInUp mb-5">
                        <div className="bg-white border text-center px-3 pb-3 h-100 mt-3">
                           <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={lessons} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="PO-R text-dark text-uppercase my-4 box-title">Lessons</div>
                            <p className="MT-R mx-auto">Create lessons with HTML, PDF, Audio, Video and Non-SCORM contents</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6w wow fadeInUp mb-5">
                        <div className="bg-white border text-center px-3 pb-3 h-100 mt-3">
                           <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={x} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="PO-R text-dark text-uppercase my-4 box-title">Question Bank</div>
                            <p className="MT-R mx-auto">Create Multi-choice, True/False, Matching and Long answer type questions</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6w wow fadeInUp mb-5">
                        <div className="bg-white border text-center px-3 pb-3 h-100 mt-3">
                           <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={watch} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="PO-R text-dark text-uppercase my-4 box-title">Tests</div>
                            <p className="MT-R mx-auto">Conduct online or offline (on-paper) tests for your students and assess progress</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
        <section className="py-3 py-lg-5">
        <Container>
            <Row className="pb-0 pb-lg-4">
              <Col className="col-sm-12 col-lg-10 m-auto text-center">
                  <h2 className="PO-R mb-3">Mock Tests & Coaching Management Systems</h2>
                  <span className="hr-line"></span>
                  <p className="mb-0 MT-R pt-3 pt-lg-5">
                        The software helps to manage students and teacher attendance, batches, fees, grades and attendance. It also provide reports on tests, fees and Attendance.
                  </p>
                   <a href="https://indiatests.in/itsc/public/coachings/create/" className="MT-R btn border-radius-4 mt-3 mt-lg-5">Try For Free</a>
              </Col>
            </Row>
        </Container>
    </section>
    <section className="subscription-plan plan-price-coaching py-5">
        <Container>
             <Row>
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3 text-white">Subscription Plan – Pricing for Coaching Management</h2>
                      <span className="hr-line"></span>
                      <p className="mb-0 MT-R pt-3 pt-lg-5 text-white">
                            Joining is easy. Select a subscription plan which best suits you. You can also start with a free account and upgrade anytime later.
                      </p>
                    </Col>
              </Row>
              <Row className="pt-3 pt-lg-5 plan-price-for-coaching">
                    <div className="col-12 col-lg-4 fadeInRight mb-4 mb-lg-0">
                        <div className="py-4 px-3 p-price-bg bg-white box-shadow text-center eq-height">
                            <h3 className="p-0 m-0 PO-R text-uppercase">Free Plan</h3>
                            <div className="bg-light-gray mt-4">
                                 <div className="p-price bg-warning text-white">
                                    <div className="ic">
                                        <span className="text-uppercase MT-R">FREE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-medium-gray text-uppercase">
                                <span className="d-block text-center MT-R">Upto 10</span>
                                <b className="MT-R">Students</b>
                            </div>
                            <p className="MT-R pt-3">
                                    10 Free Basic Preparation Tests <br/>
                                    10 Free Advance Preparation Tests <br/>
                                    Create Own Unlimited Tests (First Year Only) Enroll upto 10 Students
                            </p>
                        </div>                    
                    </div>
                    <div className="col-12 col-lg-4 fadeInRight mb-4 mb-lg-0">
                        <div className="py-4 px-3 p-price-bg bg-white box-shadow text-center eq-height">
                            <h3 className="p-0 m-0 PO-R text-uppercase">Starter</h3>
                            <div className="bg-light-gray mt-4">
                                 <div className="p-price bg-info text-white">
                                    <div className="ic">
                                        <span className="text-uppercase MT-R">₹ 9000</span>
                                        <span className="text-uppercase MT-R">PER YEAR</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-medium-gray text-uppercase">
                                <span className="d-block text-center MT-R">Upto 150</span>
                                <b className="MT-R">Students</b>
                            </div>
                            <p className="MT-R pt-3">
                                   Free Basic Preparation Tests Free Advance Preparation Tests Create Own Unlimited Tests Enroll upto 150 Students
                            </p>
                        </div>                    
                    </div>
                    <div className="col-12 col-lg-4 fadeInRight mb-4 mb-lg-0">
                        <div className="py-4 px-3 p-price-bg bg-white box-shadow text-center eq-height">
                            <h3 className="p-0 m-0 PO-R text-uppercase">Basic</h3>
                            <div className="bg-light-gray mt-4">
                                 <div className="p-price bg-success text-white">
                                    <div className="ic">
                                        <span className="text-uppercase MT-R">₹ 12,000</span>
                                        <span className="text-uppercase MT-R">PER YEAR</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-medium-gray text-uppercase">
                                <span className="d-block text-center MT-R">Upto 250</span>
                                <b className="MT-R">Students</b>
                            </div>
                            <p className="MT-R pt-3">
                                  Free Basic Preparation Tests Free Advance Preparation Tests Create Own Tests – Unlimited Enroll Upto 250 Students
                            </p>
                        </div>                    
                    </div>
               </Row>
               <Row className="pb-0 pb-lg-4">
                  <Col className="col-sm-12 col-lg-10 m-auto text-center">
                       <a href="https://easycoachingapp.com/pricing-coaching/" className="MT-R btn border-radius-4 mt-3 mt-lg-5">VIEW PLAN AND PRICE</a>
                  </Col>
                </Row>
        </Container>
    </section>
   
  </Layout>
</>
  );
};
