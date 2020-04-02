import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import w_clock from "../assets/img/w-clock.png"
import w_math from "../assets/img/w-math.png"
import w_book from "../assets/img/w-book.png"
import w_test from "../assets/img/w-test.png"
import mobile from "../assets/img/mobile.png"
import imac from "../assets/img/imac.png"
import search from "../assets/img/search.png"
import language from "../assets/img/language.png"
import school from "../assets/img/school.png"
import teacher from "../assets/img/teacher.png"
import student from "../assets/img/student.png"
import ca from "../assets/img/ca.jpg"
import ro from "../assets/img/ro.jpg"
import maulana from "../assets/img/maulana.jpg"
import aid from "../assets/img/aid.jpg"
import spark from "../assets/img/spark.jpg"
import social from "../assets/img/social.jpg"
import desk from "../assets/img/desktop.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
        <div className="home-banner position-relative">
         <div className="layer position-absolute w-100 h-100">  </div>
            <Container className="py-5">
                <Row className="text-center text-white d-block banner-title">
                    <Col className="col-sm-12 col-lg-9 m-auto">
                      <h1 className="PO-R mb-3">TECHNOLOGY . INNOVATION . DELIVERED</h1>
                      <p className="PO-R">
                          Enabling businesses to get competitive edge in the markets by building scalable and extensible softwares and mobile applications 
                      </p>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col className="col-sm-12 col-lg-4 text-left text-lg-right pt-3 pt-sm-0 pt-lg-3">
                        <div className="our-feat">
                            <div className="banner-icon">
                                  <img className="img-fluid" src={w_clock} alt="Clock" />
                            </div>
                            <h3 className="PO-R text-white mt-4 mb-3">ONLINE EXAMINER</h3>
                            <p className="MT-R text-white">Create Question bank and create your own tests – print them for in-class usage or administer online. Track student performance</p>
                        </div>
                        <div className="our-feat mt-5">
                            <div className="banner-icon">
                                  <img className="img-fluid" src={w_math} alt="Math" />
                            </div>
                            <h3 className="PO-R text-white mt-4 mb-3">INDIA TESTS</h3>
                            <p className="MT-R text-white">Ever growing tests for students to practice tests for IBPS PO, IBPS Clerk, CAT and CLAT. Monthly and Yearly subscription available</p>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-lg-4">
                        <div className="mobile-device text-center m-auto">
                            <img className="img-fluid" src={mobile} alt="Mobile Device" />
                        </div>
                    </Col>
                    <Col className="col-sm-12 col-lg-4 pt-3 pt-sm-0 pt-lg-3">
                        <div className="our-feat">
                            <div className="banner-icon">
                                  <img className="img-fluid" src={w_test} alt="Management" />
                            </div>
                            <h3 className="PO-R text-white mt-4 mb-3">SCHOOL MANAGEMENT SYSTEM</h3>
                            <p className="MT-R text-white">Organize and access online all your school systems anytime, anywhere at reasonable rate. Parents and student portal included.</p>
                        </div>
                        <div className="our-feat mt-5">
                            <div className="banner-icon">
                                  <img className="img-fluid" src={w_book} alt="LMS" />
                            </div>
                            <h3 className="PO-R text-white mt-4 mb-3">LMS</h3>
                            <p className="MT-R text-white">Our Learning Management Solution includes Online Lessons, Courses, Assignment, Worksheets, Tests and other modules which will help achieve your goals</p>
                        </div>
                    </Col>
                </Row>
            </Container>
          
        </div>
    </section>
    <section className="wow fadeIn py-5 our-services">
          <Container>
              <Row>
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3">OUR SERVICES</h2>
                      <span className="hr-line"></span>
                    </Col>
              </Row>
              <Row className="pt-5 pt-sm-3 pt-lg-5">
                  <Col className="col-12 col-sm-12 col-lg-4 text-center mb-3 mb-lg-0">
                      <div className="our-service-content">
                          <div className="top-content text-center">
                              <div className="service-image">
                                    <img className="img-fluid" src={language} alt="" />
                              </div>
                              <div className="service-content">
                                  <p className="MT-R">We provide the best development of responsive websites that adapt themselves to the mode through which they are accessed.</p>
                              </div>
                          </div>
                          <div className="bottom-content text-center">
                              <h4 className="m-0 p-3">WEBSITE DEVELOPMENT</h4>
                              <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Know More</Link>
                          </div>
                      </div>
                  </Col>
                  <Col className="col-12 col-sm-12 col-lg-4 text-center mb-3 mb-lg-0">
                      <div className="our-service-content">
                          <div className="top-content text-center">
                              <div className="service-image">
                                    <img className="img-fluid" src={search} alt="" />
                              </div>
                              <div className="service-content">
                                  <p className="MT-R">We manage your website ranking by using methods like cross linking,  URL normalization, 301 redirects, sending ads and building brand awareness.</p>
                              </div>
                          </div>
                          <div className="bottom-content text-center">
                              <h4 className="m-0 p-3">SEO AND SEM</h4>
                              <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Know More</Link>
                          </div>
                      </div>
                  </Col>
                  <Col className="col-12 col-sm-12 col-lg-4 text-center mb-3 mb-lg-0">
                      <div className="our-service-content">
                          <div className="top-content text-center">
                              <div className="service-image">
                                  <img className="img-fluid" src={imac} alt="" />
                              </div>
                              <div className="service-content">
                                  <p className="MT-R">We offer customized software solutions for organizations with comprehensive packages that are innovative, cost-effective and efficient.</p>
                              </div>
                          </div>
                          <div className="bottom-content text-center">
                              <h4 className="m-0 p-3">CUSTOMIZED SOFTWARE DEVELOPMENT</h4>
                              <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Know More</Link>
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>  
    </section>
    <section>
        <div className="jumbotron contact-short-sec mb-0">
            <Container>
                <Row>
                    <Col className="col-12 col-md-8 text-center text-md-left PO-R short-contact">
                        <p className="mb-0">CALL US ON <a href="tel:(+91) 7379-505-684" className="text-decoration-none">(+91) 7379-505-684</a> </p> OR
                         <p className="mb-0">E-MAIL AT <a href="mailto:ENQUIRY@INNOVAGESOFTWARES.COM" className="text-decoration-none">ENQUIRY@INNOVAGESOFTWARES.COM</a></p>
                    </Col>
                    <Col className="col-12 col-md-4 text-center text-md-right">
                        <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Contact Us</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
    <section className="our-solutions py-5">
        <Container>
             <Row>
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3 text-white">OUR SOLUTIONS</h2>
                      <span className="hr-line"></span>
                    </Col>
              </Row>
              <Row className="pt-3 pt-lg-5 our-solutions-content">
                    <div className="col-12 col-lg-4 fadeInRight mb-4 mb-lg-0">
                        <div className="py-4 px-3 bg-white box-shadow text-center eq-height">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={school} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="mt-5 text-medium-gray text-uppercase">
                                <h4 className="MT-R">FOR SCHOOLS</h4>
                            </div>
                            <p className="MT-R">Innovage School Management System is a comprehensive school management software, designed particularly for small and medium schools designed to automate school’s different day to day tasks, making them fast….</p>
                            <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Know More</Link>
                        </div>                    
                    </div>
                    <div className="col-12 col-lg-4 fadeInRight mb-4 mb-lg-0" data-wow-delay="0.2s">
                        <div className="py-4 px-3 bg-white box-shadow text-center eq-height">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={teacher} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="mt-5 text-medium-gray text-uppercase">
                                <h4 className="MT-R">FOR COACHINGS</h4>
                            </div>
                            <p className="MT-R">Online Examination System which can be used by coaching institutes, tuition centers and individual teachers. You can manage your students, batches, conduct online exams and assess their performance through various reports.</p>
                            <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Know More</Link>
                        </div>                    
                    </div>
                    <div className="col-12 col-lg-4 fadeInRight mb-4 mb-lg-0" data-wow-delay="0.4s">
                        <div className="py-4 px-3 bg-white box-shadow text-center eq-height">
                            <div className="our-solutions-icon bg-light-gray">
                                <div className="ic">
                                    <img className="img-fluid" src={student} alt="" className="mb-0"/>
                                </div>
                            </div>
                            <div className="mt-5 text-medium-gray text-uppercase">
                                <h4 className="MT-R">FOR STUDENTS</h4>
                            </div>
                            <p className="MT-R">If you are preparing for competitive exams like BANK PO, CLERK, SSC or for entrance exams like CLAT and CAT, you can take mock tests, attempt model and previous year papers on our educational partner website IndiaTests. Try it now!!</p>
                            <Link to="" className="MT-R btn border-radius-4 margin-30px-top">Know More</Link>
                        </div>                    
                    </div>
               </Row>
        </Container>
    </section>
    <section className="py-5">
            <Container>
                <Row>
                  <Col className="col-sm-12 col-lg-9 m-auto text-center">
                      <h2 className="PO-R mb-3"> We build beautiful websites for you </h2>
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
                                    <div className="text-white-2 alt-font text-medium margin-15px-bottom text-white p-3 PO-R font-weight-bold">
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
                                        <div className="text-white-2 alt-font text-medium margin-15px-bottom text-white p-3 PO-R font-weight-bold">
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
                                        <div className="text-white-2 alt-font text-medium margin-15px-bottom text-white p-3 PO-R font-weight-bold">
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
                                        <div className="text-white-2 alt-font text-medium margin-15px-bottom text-white p-3 PO-R font-weight-bold">
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
                                        <div className="text-white-2 alt-font text-medium margin-15px-bottom text-white p-3 PO-R font-weight-bold">
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
                                        <div className="text-white-2 alt-font text-medium margin-15px-bottom text-white p-3 PO-R font-weight-bold">
                                            Maulana Azad PG College
                                        </div> 
                                        <p className="width-85 mx-auto text-white MT-R">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          
                </Row> 
            </Container>
        </section>
        <section className="responsive-desk parallax py-5" data-stellar-background-ratio="0.6">
            <Container className="py-5 py-sm-0 py-md-0 py-lg-5">
              <div className="opacity-medium bg-extra-dark-gray"></div>
              <div className="container-fluid position-relative">
                  <div className="row align-items-center"> 
                      <div className="col-12 col-lg-6 text-center md-margin-50px-bottom sm-margin-30px-bottom wow fadeIn">
                          <img className="img-fluid" src={desk} alt="" className="mb-0"/>
                      </div> 
                      <div className="col-12 col-lg-6 wow fadeIn" data-wow-delay="0.2s">
                          <div className="width-75 lg-width-100 padding-three-lr sm-no-padding-lr">
                              <h2 className="PO-R">Choose a template and let us design a website for you</h2>
                              <Link to="" className="MT-R btn border-radius-4 margin-30px-top p-3">GET STARTED</Link>
                          </div>
                      </div> 
                  </div>
              </div>
            </Container>
        </section>
   
  </Layout>
)

export default IndexPage
