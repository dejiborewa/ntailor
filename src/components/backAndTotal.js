import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  color: var(--color-text-secondary);

  &.back {
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
    align-items: center;
  }
`;

const Button = styled.button`
  background: var(--color-darkBg);
  border: 0;
  outline: none;
  border-radius: 37px;
  color: white;
  padding: 0.6em 1.4em;
  cursor: pointer;
`;

const BackButton = () => {
  return (
    <Container>
      <Button>Back</Button>
    </Container>
  );
};

const BackAndTotal = (props) => {
  return (
    <Container className="back">
      <Link to={`.${props.location}`}>
        <BackButton>Back</BackButton>
      </Link>
      <Container>TOTAL: $45.00</Container>
    </Container>
  );
};

export default BackAndTotal;
