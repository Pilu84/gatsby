import { HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";

const About: React.FC<PageProps> = () => {


  return (

    <Layout
      pageTitle={"About me"}
    >
      <p>Hi ther! I'm proud crater for this site!</p>
    </Layout>
  );
};


export const Head: HeadFC = () => <title>About me</title>;

export default About;