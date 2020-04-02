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
    <SEO title="For Corporate" />
   <section className="banner-for-all p-0 m-0">
        <div className="layer"></div>
        <Container>
            <Row>
                <div className="banner-content-inner">
                    <h1 className="PO-R text-white m-0 p-0">For Corporate</h1>
                </div>
            </Row>
        </Container>
    </section>
    <section className="py-3 py-lg-5">
        <Container>
            <Row className="pb-0 pb-lg-4">
              <Col className="col-sm-12 col-lg-10 m-auto text-center">
                  <h2 className="PO-R mb-3">Simple And Powerful Employee Assessment Training Software </h2>
                  <span className="hr-line"></span>
                  <p className="mb-0 MT-R pt-3 pt-lg-5">
                       Innovage Employee Assessment And Training Software (Examiner) is a simple yet effective tool which is specially designed for in-house employee assessments and training. You can assess employee performance which you can use for promotions, incentives and perks.
                  </p>
              </Col>
            </Row>
        </Container>
    </section>
    <section className="bg-extra-dark-gray py-5 sms">
            <Container>
                 <Row className="pb-4">
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3 text-white">Features of Examiner</h2>
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
        <section className="try-more-feat py-5">
            <Container>
                <Row>
                    <Col className="col-12">
                        <div className="bottom-content text-center">
                          <h2 className="PO-R mb-3">Looking For More Features?</h2>
                          <span className="hr-line"></span>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-3 pt-lg-5">
                    <Col className="col-12 col-lg-4">
                        <div className="login-access text-center m-auto border rounded p-4">
                                <span className="text-uppercase MT-R mb-3 d-block text-dark">Admin Login</span>
                                <p className="p-0 m-0 MT-R">User-id: admin</p>
                                <p className="p-0 m-0 MT-R">Password: 123456</p>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-4 my-4 my-lg-0">
                        <div className="login-access text-center m-auto">
                                <a href="https://icbtc.com/demo/examiner/" className="MT-R btn border-radius-4 margin-30px-top">TRY FREE DEMO</a>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <div className="login-access text-center m-auto border rounded p-4">
                                <span className="text-uppercase MT-R mb-3 d-block text-dark">STUDENT LOGIN</span>
                                <p className="p-0 m-0 MT-R">User-id: student1</p>
                                <p className="p-0 m-0 MT-R">Password: 123456</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
   
  </Layout>
</>
  );
};
