import React from "react"
import {Container, Row, Col} from 'reactstrap';
import { useStaticQuery, graphql, Link } from 'gatsby'
import post1 from "./post1.jpg"

const RecentHomeBlogs = () => {
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
  <div className="row margin-100px-top md-margin-70px-top sm-margin-50px-top">
      {allWordpressPost.edges
        ? allWordpressPost.edges.map(({ node: { id, title, slug, content, excerpt, author, date ,featured_media} }) => (
        <div className="col-12 col-lg-3 col-md-6 md-margin-50px-bottom sm-margin-30px-bottom last-paragraph-no-margin wow fadeInUp">
            <div className="blog-post blog-post-style1 text-center text-md-left">
                <div className="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                    <Link to={`/blogs/${slug}/`}>
                        <img src={post1} alt="" className="mb-0"/>
                    </Link>
                </div>
                <div className="post-details">
                    <span className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">{date} | by <Link to={`/blogs/${slug}/`} className="text-medium-gray">{author.name}</Link></span>
                    <Link to={`/blogs/${slug}/`} className="post-title text-medium text-extra-dark-gray width-90 md-width-100 d-block">{title}</Link>
                    <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb"></div>
                    <p className="width-90 sm-width-100" dangerouslySetInnerHTML={{ __html: content}} ></p>
                </div>
            </div>
        </div>
        ))
                        : <p>No Products found!</p>}
    </div>
  )

}
export default RecentHomeBlogs;

