import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: ${(props) => (props.dot ? ".5em" : "")};
  height: ${(props) => (props.dot ? ".5em" : "")};
  border-radius: ${(props) => (props.dot ? "50%" : "")};
  background: ${(props) => (props.dot ? "#ccc" : "")};
  margin-right: ${(props) => (props.dot ? "0.3em" : "")};

  &.active {
    background: var(--color-footerBg);
  }

  @media (min-width: 452px) {
    display: none;
  }
`;

const DotWrapper = styled(Container)`
  margin: 0.5em auto 0;
`;

const Scroller = (props) => {
  return (
    <Container>
      <DotWrapper>
        <Container dot id={props.id_primary} className="active"></Container>
        <Container dot id={props.id_secondary}></Container>
      </DotWrapper>
    </Container>
  );
};

export default Scroller;
