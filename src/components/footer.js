import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  background: var(--color-footerBg);
  padding: 1em 0;

  @media (min-width: 768px) {
    width: 95%;
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
  width: 10.5em;
  padding: 1em;
  outline: none;
  border: none;

  &:hover {
    background: #1aa1ed;
  }
`;

const Footer = (props) => {
  return (
    <Container onClick={props.click}>
      <Button>{props.text}</Button>
    </Container>
  );
};

export default Footer;

