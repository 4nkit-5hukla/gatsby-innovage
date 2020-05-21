import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ReactHtmlParser from "react-html-parser"

const Post = ({ data }) => {
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
  return (
    <Layout>
      <SEO title={data.wpgraphql.post.title} />
      <section
        className="wow fadeIn parallax"
        style={{
          backgroundImage: `url(${data.wpgraphql.post.featuredImage.imageFile.childImageSharp.original.src})`,
          backgroundPosition: "0px 0px",
          visibility: "visible",
          animationName: "fadeIn",
        }}
      >
        <div className="opacity-medium bg-extra-dark-gray"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 d-flex flex-column justify-content-center text-center one-second-screen page-title-large">
              <h1 className="text-white-2 alt-font font-weight-600 margin-10px-bottom">
                {data.wpgraphql.post.title}
              </h1>
              <span className="text-white-2 opacity6 alt-font no-margin-bottom text-uppercase text-small">
                {getDate(data.wpgraphql.post.date)}
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;by&nbsp;
                {data.wpgraphql.post.author.name}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {ReactHtmlParser(data.wpgraphql.post.content)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
         query($postId: ID!) {
           wpgraphql {
             post(id: $postId, idType: DATABASE_ID) {
               author {
                 name
               }
							 date
							 postId
               title(format: RENDERED)
               content(format: RENDERED)
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
       `
export default Post