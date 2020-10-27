import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import $ from "jquery"
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
              footerMenu {
                link {
                  target
                  title
                  url
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
  const headerData = data.wpgraphql.themeOptions.ThemeOptions.header,
    footerData = data.wpgraphql.themeOptions.ThemeOptions.footer
  useEffect(() => {
    let lastScrollTop = 0
    $(window).scroll(function(event) {
      let st = $(this).scrollTop()
      if (st === 0) {
        $("header").removeClass("sticky header-appear")
      } else if (st > lastScrollTop) {
        // downscroll code
        $("header")
          .removeClass("header-appear")
          .addClass("sticky")
      } else {
        // upscroll code
        $("header").addClass("header-appear")
      }
      lastScrollTop = st
    })
  }, [])
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
