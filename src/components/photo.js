import React from "react";
import styled, { css } from "styled-components";
import { withPrefix } from "gatsby-link";

const Image = styled.img`
  user-select: none;
  pointer-events: none;

  display: block;
  max-width: 100%;
  max-height: 95vh;

  ${({ small }) =>
    small &&
    css`
      max-width: 40%;
    `};

  ${({ center }) =>
    center &&
    css`
      margin: 0 auto;
    `};
`;

export default ({ src, ...props }) => (
  <Image src={`${__PATH_PREFIX__}/photos/${src}`} {...props} />
);
