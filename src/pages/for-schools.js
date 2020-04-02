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
    <SEO title="For Schools" />
   <section className="banner-for-all">
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
    <section className="bg-extra-dark-gray py-5 sms">
            <Container>
                 <Row className="pb-4">
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3 text-white">Features of Innovage School Management System</h2>
                      <span className="hr-line"></span>
                  </Col>
                </Row>
                <Row className="pt-3 pt-lg-5">
                    <div className="col-12 col-lg-4 wow fadeInLeft py-0 py-lg-3">
                        <div className="text-center">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={friend} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <h3 className="PO-R text-uppercase text-white mt-3 mt-lg-5">User Friendly</h3>
                            <p className="m-0 p-0 MT-R text-white">Innovage SMS is extremely user-friendly and easy to operate. We have also created a full featured documentation and video tutorials in such a way that you will understand the system very easily and in no time.</p>
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
                            <p className="m-0 p-0 MT-R text-white">Innovage School Management System is totally web based so you do not have to install anything on your computer. This means you don’t have to worry about viruses, trojans, malwares or crashed and broken computers.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 wow fadeInLeft py-0 py-lg-3">
                        <div className="text-center">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={cheap} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <h3 className="PO-R text-uppercase text-white mt-3 mt-lg-5">Cheap</h3>
                            <p className="m-0 p-0 MT-R text-white">As compared to other School Management Softwares available around, Innovage SMS is cheap, cost effective and surely your value for money. You only pay as you use the system, ie. you don’t have to purchase but use it as a subscription service.</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
        <section className="wow fadeIn modules py-5">
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
                    <div className="col-12 col-lg-3 col-md-6w wow fadeInUp mb-5">
                        <div className="bg-white border text-center px-3 pb-3 h-100 mt-3">
                           <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={homework} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="PO-R text-dark text-uppercase my-4 box-title">Assignments</div>
                            <p className="MT-R mx-auto">Easily create, assign, examine, evaluate and manage assignments for students</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6w wow fadeInUp mb-5">
                        <div className="bg-white border text-center px-3 pb-3 h-100 mt-3">
                           <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={lessons} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="PO-R text-dark text-uppercase my-4 box-title">Worksheets</div>
                            <p className="MT-R mx-auto">Create, download and print worksheets with our automatic math worksheets generator</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6w wow fadeInUp mb-5">
                        <div className="bg-white border text-center px-3 pb-3 h-100 mt-3">
                           <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={staff} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="PO-R text-dark text-uppercase my-4 box-title">Attendance</div>
                            <p className="MT-R mx-auto">Take attendance without any smart-card. Save cost on expensive hardware</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6w wow fadeInUp mb-5">
                        <div className="bg-white border text-center px-3 pb-3 h-100 mt-3">
                           <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={wallet} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="PO-R text-dark text-uppercase my-4 box-title">Fee Management</div>
                            <p className="MT-R mx-auto">Take fee and manage records. Online fee payment feature (coming soon)</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
        <section className="try-more-feat pb-5">
            <Container>
                <Row>
                    <Col className="col-12">
                        <div className="bottom-content text-center">
                          <h2 className="PO-R">Looking For More Features?</h2>
                          <Link to="" className="MT-R btn border-radius-4 margin-30px-top">TRY FREE DEMO</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
   
  </Layout>
</>
  );
};
