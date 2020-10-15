import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      wpgraphql {
        themeOptions {
          pageTitle
          pageSlug
          ThemeOptions {
            header {
              headerlogo {
                sourceUrl
                imageFile {
                  childImageSharp {
                    original {
                      src
                      height
                      width
                    }
                  }
                }
              }
              mainMenu {
                menuLink {
                  url
                  title
                  target
                }
              }
            }
            footer {
              column2
              column3
              socialMedia {
                icon
                link {
                  target
                  title
                  url
                }
              }
              footerlogo {
                sourceUrl
                imageFile {
                  childImageSharp {
                    original {
                      src
                      height
                      width
                    }
                  }
                }
              }
              cta {
                enable
                title
                subTitle
                buttonLink {
                  url
                  title
                  target
                }
              }
            }
          }
        }
      }
    }
  `)
  const headerData = data.wpgraphql.themeOptions.ThemeOptions.header, footerData = data.wpgraphql.themeOptions.ThemeOptions.footer
  return (
    <>
      <Header data={headerData} />
        <main className="main-section">{children}</main>
       <Footer data={footerData} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
