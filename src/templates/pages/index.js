import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Page = ({ data }) => {
  const wordpressPage = data.wordpressPage
  console.log(data)
  return (
    <Layout>
      <SEO title={wordpressPage.title} />
      hello
      {wordpressPage.acf.page_sections.map(({ enable, section_idm, type }) => (
        <b>hello</b>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
    }
  }
`

export default Page
