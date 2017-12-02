import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { TextBase } from "../components/text";
import Footer from "../components/footer";

import "./index.css";

const Wrapper = styled.div`
  ${TextBase};
`;

export default ({ children }) => (
  <Wrapper>
    <Helmet>
      <title>with all my love for this world</title>
      <meta name="description" content="Photos by Scott Cheng" />
      <meta name="keywords" content="scott cheng, photography" />

      <link rel="stylesheet" href="https://use.typekit.net/hpv1tli.css" />
    </Helmet>

    {children()}

    <Footer />

    <script
      dangerouslySetInnerHTML={{
        __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-33401065-8', 'auto');
      ga('send', 'pageview');`,
      }}
    />
  </Wrapper>
);
