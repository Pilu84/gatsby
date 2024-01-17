import { Layout } from "../components/layout"
import React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"

type BlogData = {
  allFile: {
    nodes: [{
      name: string
    }]
  }
}

export interface BlogPageProps {
  readonly data: BlogData;
}


const BlogPage = (props: BlogPageProps) => {

  return (
    <Layout pageTitle="My blog Post">
      <ul>
        {props.data.allFile.nodes.map((node) => {
          return (
            <li key={node.name}>
              {node.name}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
}
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage;