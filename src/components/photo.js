import React from "react";
import styled, { css } from "styled-components";
import { withPrefix } from "gatsby-link";

const Image = styled.img`
  user-select: none;
  pointer-events: none;

  // TODO: support multiple photo in a row
  display: block;
  max-width: 100%;
  max-height: 95vh;
  margin: 0 auto;

  ${({ small }) =>
    small &&
    css`
      max-width: 40%;
    `};
`;

export default ({ src, ...props }) => (
  <Image src={`${__PATH_PREFIX__}/photos/${src}`} {...props} />
);
