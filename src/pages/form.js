import React from "react";
import styled from "styled-components";
import Nav from "../components/nav";
import BackAndTotal from "../components/backAndTotal";

const Container = styled.div`
  &.wrapper {
    padding: 0 1em;
  }
`;
const Form = () => {
  return (
    <Container>
      <Nav />
      <Container className="wrapper">
        <BackAndTotal location="/upload" />
      </Container>
    </Container>
  );
};

export default Form;
