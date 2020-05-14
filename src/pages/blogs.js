import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import evento from "../assets/img/envato.png"
import magento from "../assets/img/magento.png"
import google from "../assets/img/google.png"
import shopify from "../assets/img/shopify.png"
import c1 from "../assets/img/c1.jpg"
import c2 from "../assets/img/c2.jpg"
import c3 from "../assets/img/c3.jpg"
import env from "../assets/img/env.png"
import mag from "../assets/img/mag.png"
import ping from "../assets/img/ping.png"
import yahoo from "../assets/img/yahoo.png"
import pint from "../assets/img/pint.png"
import amazon from "../assets/img/amazon.png"
import woo from "../assets/img/woo.png"
import wordpress from "../assets/img/wordpress.png"
import jquery from "../assets/img/jquery.png"
import p1 from "../assets/img/p1.jpg"
import p2 from "../assets/img/p2.jpg"
import p3 from "../assets/img/p3.jpg"
import p4 from "../assets/img/p4.jpg"
import p5 from "../assets/img/p5.jpg"
import p6 from "../assets/img/p6.jpg"
import p7 from "../assets/img/p7.jpg"
import p8 from "../assets/img/p8.jpg"
import p9 from "../assets/img/p9.jpg"
import p10 from "../assets/img/p10.jpg"
import p11 from "../assets/img/p11.jpg"
import p12 from "../assets/img/p12.jpg"

const Blogs = () => {
  const { allWordpressPost } = useStaticQuery(
    graphql`
      query {
         allWordpressPost {
            edges {
              node {
                title
                slug
                id
                content
                excerpt
                author {
                  name
                }
                date(locale: "", formatString: "DD MMMM YYYY")
                featured_media {
                  id
                  localFile {
                    childImageSharp {
                      fluid {
                        originalImg
                      }
                    }
                  }
                }
              }
            }
          }
      }
    `
  )

  
  return (




  <Layout>
    <SEO title="Our Clients" />
        <section className="wow fadeIn parallax bg-fixed arch-blog-banner" data-stellar-background-ratio="0.5">
            <div className="layer bg-layer"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="z-index-9 col-12 extra-small-screen page-title-large d-flex flex-column justify-content-center text-center">
                        <h1 className="text-white-2 alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">Blog classic</h1>
        
                        <span className="text-white-2 opacity6 alt-font">Lorem Ipsum is simply dummy text printing</span>
                
                    </div>
                </div>
            </div>
        </section>
         <section className="wow fadeIn">
            <div className="container"> 
                <div className="row">
                {allWordpressPost.edges
        ? allWordpressPost.edges.map(({ node: { id, title, slug, content, excerpt, author, date ,featured_media} }) => (
                    <div key={id} className="col-12 col-lg-3 col-md-6 margin-50px-bottom last-paragraph-no-margin sm-margin-30px-bottom wow fadeInUp">
                        <div className="blog-post blog-post-style1 text-center text-md-left">
                            <div className="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                                <Link to={`/blogs/${slug}/`}>
                                    <img src={p1} alt="" className="mb-0"/>
                                </Link>
                            </div>
                            <div className="post-details">
                                <span className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">{date} | by <Link to={`/blogs/${slug}/`} className="text-medium-gray">{author.name}</Link></span>
                                <Link to={`/blogs/${slug}/`} className="post-title text-medium text-extra-dark-gray width-90 d-block md-width-100">{title}</Link>
                                <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb"></div>
                                <p className="width-90 sm-width-100" dangerouslySetInnerHTML={{ __html: content}} ></p>
                            </div>
                        </div>
                    </div>
                    
                      ))
                        : <p>No Products found!</p>}
                </div>
                <div className=" text-center margin-100px-top md-margin-50px-top wow fadeInUp">
                    <div className="pagination text-small text-uppercase text-extra-dark-gray">
                        <ul className="mx-auto">
                            <li><a href="#"><i className="fas fa-long-arrow-alt-left margin-5px-right d-none d-md-inline-block"></i> Prev</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">Next <i className="fas fa-long-arrow-alt-right margin-5px-left d-none d-md-inline-block"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>  
  </Layout>
)
}


export default Blogs
