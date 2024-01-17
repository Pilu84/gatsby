import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

export interface SeoProps {
  readonly title: string;
}


const Seo = (props: SeoProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{props.title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo