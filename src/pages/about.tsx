import { HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import Seo from "../components/seo";

const About: React.FC<PageProps> = () => {


  return (

    <Layout
      pageTitle={"About me"}
    >
      <p>Hi ther! I'm proud crater for this site!</p>
    </Layout>
  );
};


export const Head: HeadFC = () => <Seo title="About me" />;

export default About;