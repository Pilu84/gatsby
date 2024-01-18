import { Layout } from "../../components/layout"
import React from "react"
import Seo from "../../components/seo"
import { graphql, Link } from "gatsby"

type BlogData = {
  allMdx: {
    nodes: [{
      frontmatter: {
        date: string,
        title: string,
        slug: string
      }
      id: string
    }]
  }
}

export interface BlogPageProps {
  readonly data: BlogData;
}


const BlogPage = (props: BlogPageProps) => {

  return (
    <Layout pageTitle="My blog Post">
        {props.data.allMdx.nodes.map((node) => {
          return (
            <article key={node.id}>
              <Link to={`/blog/${node.frontmatter.slug}`}><h1>{node.frontmatter.title}</h1></Link>
              <p>Posted {node.frontmatter.date}</p>
            </article>
          )
        })}
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
      }
      id
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage;