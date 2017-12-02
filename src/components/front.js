import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Section from "./section";

const Title = styled.div`
  font-family: "p22-dearest-pro", sans-serif;

  font-size: 42px;
  @media (min-width: 700px) {
    font-size: 54px;
  }
  @media (min-width: 1000px) {
    font-size: 76px;
  }
`;

const Subtitle = styled.div`
  margin-top: 3em;
`;

const BackLink = styled(Link)`
  border: none;
`;

export default ({ title, isIndex }) => (
  <Section>
    <Title>{title}</Title>
    <Subtitle>
      {isIndex && (
        <div>
          Photos by <a href="http://scottcheng.com/">Scott Cheng</a>
        </div>
      )}
    </Subtitle>
  </Section>
);
