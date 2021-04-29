import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  margin: 1.2em 0;
`;

const Text = styled.h4``;

const Section = (props) => {
  return (
    <Container>
      <Text>{props.title}</Text>
    </Container>
  );
};

export default Section;
