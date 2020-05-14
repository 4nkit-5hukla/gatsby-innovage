import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => {
  console.log(data)
  return (<></>)
}

export const query = graphql`
         query($slug: String!) {
           wordpressPage(slug: { eq: $slug }) {
             title
           }
         }
       `

export default Page
