import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ReactHtmlParser from "react-html-parser"

const Recentblogs = props => {
  const getDate = date => {
    const Months = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    )
    const msec = Date.parse(date)
    const d = new Date(msec)
    const month = Months[d.getMonth()]
    const day = d.getDate()
    const year = d.getFullYear()
    return `${day} ${month} ${year}`
  }
  const { wpgraphql } = useStaticQuery(
    graphql`
      {
        wpgraphql {
          posts(last: 4) {
            nodes {
              author {
                name
              }
              date
              title(format: RENDERED)
              uri
              slug
              excerpt(format: RENDERED)
              featuredImage {
                altText
                sourceUrl
                imageFile {
                  childImageSharp {
                    original {
                      height
                      src
                      width
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
    <section
      id={props.id !== "" ? props.id : null}
      className="border-top border-color-extra-light-gray wow fadeIn"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="alt-font margin-5px-bottom text-uppercase text-small text-medium-gray">
              {props.content.thinTitle}
            </p>
            <h3 className="h-3 text-uppercase alt-font text-extra-dark-gray margin-10px-top margin-20px-bottom font-weight-700 md-width-100 sm-width-100">
              {props.content.mainTitle}
            </h3>
            <span className="separator-line-horizontal-medium-light2 bg-deep-pink d-table mx-auto width-100px"></span>
          </div>
        </div>
        <div className="row margin-100px-top md-margin-70px-top sm-margin-50px-top">
          {wpgraphql.posts.nodes ? (
            wpgraphql.posts.nodes.map(
              (
                { author, date, excerpt, featuredImage, title, slug, uri },
                index
              ) => (
                <div
                  key={index}
                  className="col-12 col-lg-3 col-md-6 md-margin-50px-bottom sm-margin-30px-bottom last-paragraph-no-margin wow fadeInUp"
                >
                  <div className="blog-post blog-post-style1 text-center text-md-left">
                    <div className="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                      <Link to={`/blogs/${slug}/`}>
                        <img
                          src={
                            featuredImage.imageFile.childImageSharp.original.src
                          }
                          alt={featuredImage.altText}
                          className="mb-0"
                        />
                      </Link>
                    </div>
                    <div className="post-details">
                      <span className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">
                        {props.content.displayDate ? `${getDate(date)}` : ``}
                        {props.content.displayDate ? ` | by ` : `by `}
                        {props.content.displayUser ? `${author.name}` : ``}
                      </span>
                      <Link
                        to={`/blogs/${slug}/`}
                        className="post-title text-medium text-extra-dark-gray width-90 md-width-100 d-block"
                      >
                        {title}
                      </Link>
                      <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb"></div>
                      <div className="width-90 sm-width-100">
                        {ReactHtmlParser(excerpt)}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <p>No Products found!</p>
          )}
        </div>
      </div>
    </section>
  )
}
export default Recentblogs
