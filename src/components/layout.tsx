import { Link } from "gatsby";
import React, { ReactNode } from "react";
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from "./layout.module.css"

export interface LayoutProps {
  readonly pageTitle: string;
  readonly children: ReactNode;
}

export const Layout = (props: LayoutProps) => {

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{props.pageTitle}</h1>
        {props.children}
      </main>
    </div>
  )


}