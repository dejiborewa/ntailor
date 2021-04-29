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
    background: white;
  }
`;

const Button = styled.button`
  background: var(--color-footerBg);
  color: var(--color-text-light);
  border-radius: 8px;
  cursor: pointer;
  padding: 1em 2em;
  outline: none;
  border: 0;
`;

const Footer = (props) => {
  return (
    <Container>
      <Button>{props.text}</Button>
    </Container>
  );
};

export default Footer;
