import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  background: var(--color-footerBg);
  padding: 1em 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    width: 80%;
    margin: 0 auto;
    background: white;
  }
`;

const Link = styled.a`
  background: var(--color-footerBg);
  color: var(--color-text-light);
  cursor: pointer;
  padding: .7em 1.2em;
  border-radius: 8px;
`;

const Footer = (props) => {
  return (
    <Container>
      <Link>{props.text}</Link>
    </Container>
  );
};

export default Footer;
