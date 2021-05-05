import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: var(--color-darkBg);
  font-family: var(--font-header);
`;

const Title = styled.h3`
  color: var(--color-text-grey);
  margin: 0 0 0 0.5em;
  padding: 0.5em;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const Span = styled.span`
  color: white;
  font-family: var(--font-body) !important;
`;

const Nav = () => {
  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>
          Neighbor<Span>Tailor</Span>
        </Title>
      </Link>
    </Container>
  );
};

export default Nav;
