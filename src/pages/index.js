import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import BannerSlider from "../components/BannerSlider"
import Blogssection from "../components/Blogssection"
import Calltoaction from "../components/Calltoaction"
import Clientsgrid from "../components/Clientsgrid"
import Contactform from "../components/Contactform"
import Contactgrid from "../components/Contactgrid"
import Newsletter from "../components/Newsletter"
import Parallaxsection from "../components/Parallaxsection"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section4 from "../components/Section4"
import Section5 from "../components/Section5"
import Section6 from "../components/Section6"
import Section7 from "../components/Section7"
import Section8 from "../components/Section8"
import Servicessection from "../components/Servicessection"
import Recentblogs from "../components/Recentblogs"
import Testimonials from "../components/Testimonials"

const IndexPage = data => {
  const { wpgraphql } = useStaticQuery(
    graphql`
      query {
        wpgraphql {
          page(id: "/home/", idType: URI) {
            pageId
            title(format: RENDERED)
            PageBuilder {
              sections {
                ... on WPGraphQL_Page_Pagebuilder_Sections_Banner {
                  enable
                  content {
                    title
                    subtitle
                    bgimage {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          original {
                            src
                            width
                            height
                          }
                        }
                      }
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Bannerslider {
                  enable
                  slides {
                    enable
                    subTitle
                    title
                    link {
                      target
                      title
                      url
                    }
                    image {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          original {
                            width
                            src
                            height
                          }
                        }
                      }
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Blogssection {
                  enable
                  content {
                    backgroundimage {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          original {
                            src
                            width
                            height
                          }
                        }
                      }
                    }
                    title
                    subtitle
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Calltoaction {
                  enable
                  content {
                    title
                    button {
                      url
                      title
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Contactform {
                  enable
                  content {
                    formposition
                    formid
                    image {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          original {
                            src
                            width
                            height
                          }
                        }
                      }
                    }
                    title
                    infodescription
                    infobutton {
                      url
                      title
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Contactgrid {
                  enable
                  content {
                    left {
                      image {
                        altText
                        sourceUrl
                        imageFile {
                          childImageSharp {
                            original {
                              src
                              width
                              height
                            }
                          }
                        }
                      }
                      icon
                      title
                      description
                    }
                    center {
                      icon
                      title
                      description
                      image {
                        altText
                        sourceUrl
                        imageFile {
                          childImageSharp {
                            original {
                              src
                              width
                              height
                            }
                          }
                        }
                      }
                    }
                    right {
                      image {
                        altText
                        sourceUrl
                        imageFile {
                          childImageSharp {
                            original {
                              src
                              width
                              height
                            }
                          }
                        }
                      }
                      icon
                      title
                      description
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Clientsgrid {
                  enable
                  content {
                    title
                    subtitle
                    clients {
                      logo {
                        altText
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
                      link {
                        title
                        url
                      }
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Newsletter {
                  enable
                  content {
                    title
                    subtitle
                    description
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Parallaxsection {
                  enable
                  content {
                    backgroundimage {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          original {
                            src
                            width
                            height
                          }
                        }
                      }
                    }
                    link {
                      url
                      title
                      target
                    }
                    linkimage {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          original {
                            src
                            width
                            height
                          }
                        }
                      }
                    }
                    title
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Recentblogs {
                  enable
                  content {
                    thinTitle
                    mainTitle
                    displayDate
                    displayUser
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Section1 {
                  enable
                  content {
                    title
                    description
                    gridboxes {
                      boxbg {
                        sourceUrl
                        imageFile {
                          childImageSharp {
                            original {
                              width
                              src
                              height
                            }
                          }
                        }
                      }
                      logo {
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
                      description
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Section2 {
                  enable
                  content {
                    backgroundImage {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          original {
                            src
                            width
                            height
                          }
                        }
                      }
                    }
                    boldTitle
                    thinTitle
                    description
                    grid {
                      icon
                      title
                      description
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Section3 {
                  enable
                  content {
                    title
                    description
                    iconBoxes {
                      icon
                      title
                      description
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Section4 {
                  enable
                  content {
                    portfolios {
                      bgImage {
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
                      thinTitle
                      mainTitle
                      description
                      readMoreLink {
                        target
                        title
                        url
                      }
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Section5 {
                  enable
                  content {
                    leftTitle
                    leftContent
                    rightImage {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          original {
                            width
                            src
                            height
                          }
                        }
                      }
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Section6 {
                  enable
                  content {
                    thintitle
                    maintitle
                    iconBoxes {
                      icon
                      title
                      description
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Section7 {
                  enable
                  content {
                    thintitle
                    maintitle
                    showcases {
                      image {
                        altText
                        sourceUrl
                        imageFile {
                          childImageSharp {
                            original {
                              src
                              width
                              height
                            }
                          }
                        }
                      }
                      title
                      description
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Section8 {
                  enable
                  content {
                    sectionimage {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          original {
                            src
                            width
                            height
                          }
                        }
                      }
                    }
                    maintitle
                    features {
                      title
                      description
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Servicessection {
                  enable
                  content {
                    services {
                      thintitle
                      title
                      description
                    }
                  }
                }
                ... on WPGraphQL_Page_Pagebuilder_Sections_Testimonials {
                  enable
                  content {
                    thintitle
                    maintitle
                    testimonialdata {
                      testimonialcontent
                      avatar {
                        altText
                        sourceUrl
                        imageFile {
                          childImageSharp {
                            original {
                              src
                              width
                              height
                            }
                          }
                        }
                      }
                      name
                      designation
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
      <SEO title={wpgraphql.page.title} />
      {wpgraphql.page.PageBuilder.sections.map((section, index) => {
        let component
        if (section !== null) {
          if (section.enable) {
            switch (section.__typename.split("_").pop()) {
              case "Banner":
                component = <Banner key={index} content={section.content} />
                break
              case "Bannerslider":
                component = <BannerSlider key={index} slides={section.slides} />
                break
              case "Blogssection":
                component = (
                  <Blogssection key={index} content={section.content} />
                )
                break
              case "Calltoaction":
                component = (
                  <Calltoaction key={index} content={section.content} />
                )
                break
              case "Clientsgrid":
                component = (
                  <Clientsgrid key={index} content={section.content} />
                )
                break
              case "Contactform":
                component = (
                  <Contactform key={index} content={section.content} />
                )
                break
              case "Contactgrid":
                component = (
                  <Contactgrid key={index} content={section.content} />
                )
                break
              case "Newsletter":
                component = <Newsletter key={index} content={section.content} />
                break
              case "Parallaxsection":
                component = (
                  <Parallaxsection key={index} content={section.content} />
                )
                break
              case "Recentblogs":
                component = (
                  <Recentblogs key={index} content={section.content} />
                )
                break
              case "Section1":
                component = <Section1 key={index} content={section.content} />
                break
              case "Section2":
                component = <Section2 key={index} content={section.content} />
                break
              case "Section3":
                component = <Section3 key={index} content={section.content} />
                break
              case "Section4":
                component = <Section4 key={index} content={section.content} />
                break
              case "Section5":
                component = <Section5 key={index} content={section.content} />
                break
              case "Section6":
                component = <Section6 key={index} content={section.content} />
                break
              case "Section7":
                component = <Section7 key={index} content={section.content} />
                break
              case "Section8":
                component = <Section8 key={index} content={section.content} />
                break
              case "Servicessection":
                component = (
                  <Servicessection key={index} content={section.content} />
                )
                break
              case "Testimonials":
                component = (
                  <Testimonials key={index} content={section.content} />
                )
                break
              default:
                component = false
            }
          }
        }
        return component
      })}
    </Layout>
  )
}

export default IndexPage
