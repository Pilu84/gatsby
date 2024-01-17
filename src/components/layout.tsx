import { Link, useStaticQuery, graphql } from "gatsby";
import React, { ReactNode } from "react";
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from "./layout.module.css"

export interface LayoutProps {
  readonly pageTitle: string;
  readonly children: ReactNode;
}

export const Layout = (props: LayoutProps) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/blog">Blog</Link></li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{props.pageTitle}</h1>
        {props.children}
      </main>
    </div>
  )


}