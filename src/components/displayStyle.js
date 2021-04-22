import React from "react";
import styled from "styled-components";

const Container = styled.div`
  &.style_wrapper {
    display: flex;
    overflow-x: auto;
    gap: 0.5em;
  }

  &.style {
    position: relative;
    min-width: 10.3em;
    min-height: 10.3em;
    text-align: center;
    background: #f2f3f8;
    border-radius: 10px;
  }

  &.style_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Image = styled.img``;
const Text = styled.h4`
  margin: 0;
  font-weight: 500;
`;

const DisplayStyle = (props) => {
  return (
    <Container className="style_wrapper">
      {props.array.map((item) => {
        return (
          <Container className="style">
            <Container className="style_content">
              <Container className="image">
                <Image src={item.style} />
              </Container>
              <Container className="text">
                <Text>{item.name}</Text>
              </Container>
            </Container>
          </Container>
        );
      })}
    </Container>
  );
};

export default DisplayStyle;
