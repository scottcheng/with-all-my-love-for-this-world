import styled, { css } from "styled-components";

const styles = ({ padding, margin }) => `
  padding: 0 ${padding};
  margin: 0 auto ${margin};
  &:first-child {
    margin-top: ${margin};
  }
`;

export default styled.div`
  text-align: center;
  max-width: 1200px;

  @media (max-width: 699px) {
    ${styles({ padding: "10px", margin: "3em" })};

    ${({ fullPage }) =>
      fullPage &&
      css`
        margin: 40vh auto;
      `};
  }

  @media (min-width: 700px) and (max-width: 999px) {
    ${styles({ padding: "20px", margin: "6em" })};

    ${({ fullPage }) =>
      fullPage &&
      css`
        margin: 45vh auto;
      `};
  }

  @media (min-width: 1000px) {
    ${styles({ padding: "40px", margin: "9em" })};

    ${({ fullPage }) =>
      fullPage &&
      css`
        margin: 55vh auto;
      `};
  }
`;
