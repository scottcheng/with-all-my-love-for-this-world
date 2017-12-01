import styled from "styled-components";

export const TextBase = `
  font-family: "adobe-garamond-pro", serif;
  color: #000;

  font-size: 10px;
  @media (min-width: 700px) {
    font-size: 12px;
  }
  @media (min-width: 1000px) {
    font-size: 14px;
  }
`;

export default styled.div`
  line-height: 2.5;
  font-style: italic;
  font-size: 1.4em;
  margin: 0 20px;
`;
