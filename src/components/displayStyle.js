import React, { useEffect } from "react";
import styled from "styled-components";
import Scroller from "./scroller";

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
    cursor: pointer;
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
  useEffect(() => {
    const style_wrapper = document.getElementById(`${props.id}`);
    style_wrapper.addEventListener("scroll", (event) => {
      const device_width =
        document.documentElement.clientWidth || window.innerWidth;
      const leftOffset = event.currentTarget.scrollLeft;

      if (leftOffset > device_width / 5) {
        document
          .getElementById(`${props.id_primary}`)
          .classList.remove("active");
        document
          .getElementById(`${props.id_secondary}`)
          .classList.add("active");
      } else if (leftOffset < device_width / 5) {
        document
          .getElementById(`${props.id_secondary}`)
          .classList.remove("active");
        document.getElementById(`${props.id_primary}`).classList.add("active");
      }
    });
  });

  return (
    <>
      <Container className="style_wrapper" id={props.id}>
        {props.array.map((item, index) => {
          return (
            <Container className="style" key={index}>
              <Container className="style_content">
                <Container className="image">
                  <Image src={item.style} loading="eager" />
                </Container>
                <Container className="text">
                  <Text>{item.name}</Text>
                </Container>
              </Container>
            </Container>
          );
        })}
      </Container>
      <Scroller
        id_primary={props.id_primary}
        id_secondary={props.id_secondary}
      />
    </>
  );
};

export default DisplayStyle;
