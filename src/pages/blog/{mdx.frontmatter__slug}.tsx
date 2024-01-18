import { Layout } from "../../components/layout"
import React, { ReactNode } from "react"
import Seo from "../../components/seo"
import { graphql, HeadFC, HeadProps } from "gatsby"

export type BlogPostData = {
  mdx: {
    frontmatter: {
      title: string,
      date: string
    }
  }
}

export interface BlogPostProps {
  data: BlogPostData,
  children: ReactNode
}

const BlogPost = (props: BlogPostProps) => {
  return (
    <Layout pageTitle={props.data.mdx.frontmatter.title}>
      <p>{props.data.mdx.frontmatter.title}</p>
      {props.children}
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
    }
  }
}
`
export const Head: HeadFC<BlogPostData> = (props: HeadProps<BlogPostData>) => {return <Seo title={props.data.mdx.frontmatter.title} /> }

export default BlogPost;