import React from "react";
import styled from "styled-components";
import back from "./assets/backAndTotal/back.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  color: var(--color-text-secondary);

  &.back {
    display: flex;
    background: var(--color-darkBg);
    align-items: center;
    padding: 0.5em 0.7em;
    border-radius: 37px;

    &:hover {
      background: black;
    }
  }

  &.backAndTotal {
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
    align-items: center;
  }
`;

const Button = styled.button`
  border: 0;
  background: inherit;
  color: white;
  outline: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 0.9em;
  height: 0.9em;
`;

export const BackButton = () => {
  return (
    <Container className="back">
      <Image src={back} />
      <Button>Back</Button>
    </Container>
  );
};

const BackAndTotal = (props) => {
  return (
    <Container className="backAndTotal">
      <Link to={`.${props.location}`} style={{ textDecoration: "none" }}>
        <BackButton />
      </Link>
      <Container>TOTAL: $45.00</Container>
    </Container>
  );
};

export default BackAndTotal;
