import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql, Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BannerSlider from "../components/BannerSlider"
import Section2 from "../components/Section2"
import laptop from "../assets/img/laptop.png"
import post1 from "../assets/img/post1.jpg"
import post2 from "../assets/img/post2.jpg"
import post3 from "../assets/img/post3.jpg"
import post4 from "../assets/img/post4.jpg"
import RecentHomeBlogs from "../components/RecentHomeBlog"

const IndexPage = data => {
  const { wordpressPage } = useStaticQuery(
    graphql`
      query {
        wordpressPage(slug: { eq: "home" }, acf: {}) {
          title
          slug
          acf {
            page_sections {
              enable
              section_id
              type
            }
          }
        }
      }
    `
  )
  console.log(wordpressPage)
  return (
    <Layout>
      <SEO title={wordpressPage.title} />
      {wordpressPage.acf.page_sections.map(({ enable, section_id, type }, index) => {
        console.log(enable, type)
        if (enable){
          switch (type) {
            case "bannerSlider":
              return (
                <BannerSlider
                  key={section_id}
                  sectionId={section_id}
                  pageSlug={wordpressPage.slug}
                />
              )
              break
            case "section2":
              return (
                <Section2
                  key={section_id}
                  sectionId={section_id}
                  pageSlug={wordpressPage.slug}
                />
              )
              break
          }
        }
      })}
    </Layout>
  )
}

export default IndexPage
