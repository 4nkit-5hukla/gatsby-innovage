import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  console.log(data)
  return <></>
}

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      acf {
        page_sections {
          enable
          section_id
          type
          slides {
            enable
            image {
              alt_text
              localFile {
                childImageSharp {
                  original {
                    width
                    height
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Page
