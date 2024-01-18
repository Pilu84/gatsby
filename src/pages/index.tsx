import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"


const IndexPage: React.FC<PageProps> = () => {
  
  
  return (
    <Layout 
      pageTitle={"Home Page"}
    >
      <p>I'm making this by following the gatsby Tutorial</p>
      <StaticImage
        alt="Test image"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home Page" />
/*
part5
*/