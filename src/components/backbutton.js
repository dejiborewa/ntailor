import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Button = styled.button`
  background: var(--color-darkBg);
  border: 0;
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

export default BackButton;
