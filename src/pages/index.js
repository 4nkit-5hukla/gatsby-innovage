import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql, Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import laptop from "../assets/img/laptop.png"
import post1 from "../assets/img/post1.jpg"
import post2 from "../assets/img/post2.jpg"
import post3 from "../assets/img/post3.jpg"
import post4 from "../assets/img/post4.jpg"
import HomeBannerSlider from "../components/HomeBannerSlider"
import RecentHomeBlogs from "../components/RecentHomeBlog"

const IndexPage = data => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(slug: { eq: "home" }) {
          title
          template
          status
          content
          acf {
            thin_title
            bold_title
            description
            grid_1_description
            grid_1_icon
            grid_1_title
            grid_2_description
            grid_2_icon
            grid_2_title
            section_3_title
            section_3_description
            left_title
            left_content
            right_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  console.log(wordpressPage)
  return (
    <Layout>
      <SEO title="Home" />
      <section className="p-0">
        <HomeBannerSlider />
      </section>
      <section className="wow fadeIn cover-background md-no-background-img bg-image bg-medium-light-gray build-perfect-web">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-6 wow fadeIn">
              <div className="row m-0">
                <div className="col-12 text-center text-lg-left sm-no-padding-lr last-paragraph-no-margin margin-60px-bottom md-margin-30px-bottom">
                  <span className="text-medium text-deep-pink alt-font margin-10px-bottom d-inline-block">
                    {wordpressPage.acf.thin_title}
                  </span>
                  <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600">
                    {wordpressPage.acf.bold_title}
                  </h3>
                  <p
                    className="width-90 md-width-100"
                    dangerouslySetInnerHTML={{
                      __html: wordpressPage.acf.description,
                    }}
                  ></p>
                </div>
                <div className="col-12 col-md-6 sm-margin-30px-bottom last-paragraph-no-margin sm-no-padding-lr text-center text-lg-left">
                  <i
                    dangerouslySetInnerHTML={{
                      __html: wordpressPage.acf.grid_1_icon,
                    }}
                  ></i>
                  <div className="feature-content">
                    <div className="alt-font font-weight-600 text-extra-dark-gray margin-5px-bottom">
                      {wordpressPage.acf.grid_1_title}
                    </div>
                    <p
                      className="width-80 lg-width-90 md-width-100"
                      dangerouslySetInnerHTML={{
                        __html: wordpressPage.acf.grid_1_description,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="col-12 col-md-6 last-paragraph-no-margin sm-no-padding-lr text-center text-lg-left">
                  <i
                    dangerouslySetInnerHTML={{
                      __html: wordpressPage.acf.grid_2_icon,
                    }}
                  ></i>
                  <div className="feature-content">
                    <div className="alt-font font-weight-600 text-extra-dark-gray margin-5px-bottom">
                      {wordpressPage.acf.grid_2_title}
                    </div>
                    <p
                      className="width-80 lg-width-90 md-width-100"
                      dangerouslySetInnerHTML={{
                        __html: wordpressPage.acf.grid_2_description,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wow fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 margin-eight-bottom text-center last-paragraph-no-margin">
              <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600">
                {wordpressPage.acf.section_3_title}
              </h3>
              <p
                className="width-80 d-inline-block sm-width-100"
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.section_3_description,
                }}
              ></p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-3 col-md-6 md-margin-four-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin">
              <div className="bg-white border-color-extra-medium-gray border text-center padding-eighteen-tb border-radius-4 position-relative h-100">
                <div className="d-inline-block margin-20px-bottom">
                  <i className="icon-tools text-white-2 icon-round-small bg-deep-pink"></i>
                </div>
                <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
                  Pixel Perfect Design
                </div>
                <p className="width-75 mx-auto">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy.
                </p>
              </div>
            </div>
            <div
              className="col-12 col-lg-3 col-md-6 md-margin-four-bottom sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin"
              data-wow-delay="0.2s"
            >
              <div className="bg-white border-color-extra-medium-gray border text-center padding-eighteen-tb border-radius-4 position-relative h-100">
                <div className="d-inline-block margin-20px-bottom">
                  <i className="icon-layers text-white-2 icon-round-small bg-deep-pink"></i>
                </div>
                <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
                  Full Documentation
                </div>
                <p className="width-75 mx-auto">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy.
                </p>
              </div>
            </div>
            <div
              className="col-12 col-lg-3 col-md-6 sm-margin-30px-bottom wow fadeInUp last-paragraph-no-margin"
              data-wow-delay="0.4s"
            >
              <div className="bg-white border-color-extra-medium-gray border text-center padding-eighteen-tb border-radius-4 position-relative h-100">
                <div className="d-inline-block margin-20px-bottom">
                  <i className="icon-scissors text-white-2 icon-round-small bg-deep-pink"></i>
                </div>
                <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
                  Reasonable Pricing
                </div>
                <p className="width-75 mx-auto">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy.
                </p>
              </div>
            </div>
            <div
              className="col-12 col-lg-3 col-md-6 wow fadeInUp last-paragraph-no-margin"
              data-wow-delay="0.6s"
            >
              <div className="bg-white border-color-extra-medium-gray border text-center padding-eighteen-tb border-radius-4 position-relative h-100">
                <div className="d-inline-block margin-20px-bottom">
                  <i className="icon-lock text-white-2 icon-round-small bg-deep-pink"></i>
                </div>
                <div className="alt-font text-extra-dark-gray font-weight-600 margin-10px-bottom">
                  User-friendly Admin
                </div>
                <p className="width-75 mx-auto">
                  Lorem Ipsum is simply text of the printing and typesetting
                  industry. Lorem Ipsum has been standard dummy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-0 wow fadeIn">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-3 p-0 cover-background position-relative md-height-500px sm-height-300px wow fadeIn left-img"></div>
            <div
              className="col-12 col-lg-3 p-0 d-flex align-items-center position-relative bg-extra-dark-gray text-center text-lg-left wow fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="padding-fifteen-all lg-padding-ten-all sm-padding-30px-all width-100">
                <div className="alt-font text-medium-gray margin-10px-bottom">
                  Build perfect websites
                </div>
                <div className="alt-font text-extra-large margin-20px-bottom text-white-2 width-90 lg-width-100 sm-margin-15px-bottom">
                  Unlimited power and customization possibilities
                </div>
                <p className="text-color-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since. Lorem Ipsum has been the
                  industry's standard dummy text ever since. Lorem Ipsum is
                  simply dummy text.
                </p>
                <a
                  href=""
                  className="btn btn-transparent-white btn-small border-radius-4"
                >
                  <i
                    className="fa fa-play-circle icon-very-small margin-5px-right ml-0"
                    aria-hidden="true"
                  ></i>
                  Read More
                </a>
              </div>
            </div>
            <div
              className="col-12 col-lg-3 p-0 cover-background position-relative md-height-500px sm-height-300px wow fadeIn right-img"
              data-wow-delay="0.4s"
            ></div>
            <div
              className="col-12 col-lg-3 p-0 d-flex align-items-center position-relative bg-extra-dark-gray text-center text-lg-left wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="padding-fifteen-all lg-padding-ten-all sm-padding-30px-all width-100">
                <div className="alt-font text-medium-gray margin-10px-bottom">
                  Unique digital experiences
                </div>
                <div className="alt-font text-extra-large margin-20px-bottom text-white-2 width-90 lg-width-100 sm-margin-15px-bottom">
                  Pixel perfect design and clear code delivered to you
                </div>
                <p className="text-color-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since. Lorem Ipsum has been the
                  industry's standard dummy text ever since. Lorem Ipsum is
                  simply dummy text.
                </p>
                <a
                  href=""
                  className="btn btn-transparent-white btn-small border-radius-4"
                >
                  <i
                    className="fa fa-play-circle icon-very-small margin-5px-right ml-0"
                    aria-hidden="true"
                  ></i>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wow fadeIn">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 md-margin-50px-bottom">
              <h3 className="h-3 alt-font text-extra-dark-gray font-weight-600">
                {wordpressPage.acf.left_title}
              </h3>
              <div
                className="left-list"
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.left_content,
                }}
              ></div>
              <a
                href="home-classic-digital-agency.html"
                className="btn btn-dark-gray btn-small text-extra-small border-radius-4 margin-20px-top"
              >
                <i
                  className="fas fa-play-circle icon-very-small margin-5px-right no-margin-left"
                  aria-hidden="true"
                ></i>{" "}
                ALL advantages
              </a>
            </div>
            <div className="col-12 col-lg-7 text-center">
              <img
                src={
                  wordpressPage.acf.right_image.localFile.childImageSharp.fluid
                    .src
                }
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="border-top border-color-extra-light-gray wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="alt-font margin-5px-bottom text-uppercase text-small text-medium-gray">
                Publish what you think
              </p>
              <h3 className="h-3 text-uppercase alt-font text-extra-dark-gray margin-10px-top margin-20px-bottom font-weight-700 md-width-100 sm-width-100">
                Latest Blogs
              </h3>
              <span className="separator-line-horizontal-medium-light2 bg-deep-pink d-table mx-auto width-100px"></span>
            </div>
          </div>
          <div className=""></div>
          <RecentHomeBlogs />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
