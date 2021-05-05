import React from "react";
import styled from "styled-components";
import Nav from "../components/nav";

const Container = styled.div`
  &.main {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 10em;
  }

  &.radio {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.h4`
  color: ${(props) => (props.wedding ? "var(--color-footerBg)" : "")};
  cursor: ${(props) => (props.wedding ? "pointer" : "")};
`;
const TextLight = styled.h5`
  font-weight: ${(props) => (props.launchDate ? "900" : "300")};
`;

const OrderCompleted = () => {
  return (
    <Container>
      <Nav />
      <Container className="main">
        <Container>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="100px"
            height="100px"
          >
            <path
              fill="#52bfa1"
              d="M71,82H29c-6.075,0-11-4.925-11-11V29c0-6.075,4.925-11,11-11h42c6.075,0,11,4.925,11,11v42C82,77.075,77.075,82,71,82z"
            />
            <path
              fill="#fefdef"
              d="M47.5,61.5c-0.481,0-0.964-0.173-1.346-0.521l-12-12c-0.817-0.742-0.877-2.008-0.134-2.825c0.743-0.815,2.007-0.878,2.825-0.134l10.628,10.753l17.653-17.728c0.802-0.758,2.067-0.724,2.827,0.081c0.759,0.803,0.723,2.068-0.081,2.827l-19,19C48.488,61.317,47.994,61.5,47.5,61.5z"
            />
            <path
              fill="#1f212b"
              d="M71 78H29c-3.86 0-7-3.141-7-7V29c0-3.859 3.14-7 7-7h37.5c.276 0 .5.224.5.5S66.776 23 66.5 23H29c-3.309 0-6 2.691-6 6v42c0 3.309 2.691 6 6 6h42c3.309 0 6-2.691 6-6V51c0-.276.224-.5.5-.5S78 50.724 78 51v20C78 74.859 74.859 78 71 78zM77.5 48c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5s.5.224.5.5v4C78 47.776 77.776 48 77.5 48zM77.5 42c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C78 41.776 77.776 42 77.5 42z"
            />
            <g>
              <path
                fill="#1f212b"
                d="M71,83H29c-6.617,0-12-5.383-12-12V29c0-6.617,5.383-12,12-12h42c6.617,0,12,5.383,12,12v42C83,77.617,77.617,83,71,83z M29,19c-5.514,0-10,4.486-10,10v42c0,5.514,4.486,10,10,10h42c5.514,0,10-4.486,10-10V29c0-5.514-4.486-10-10-10H29z"
              />
            </g>
            <g>
              <path
                fill="#1f212b"
                d="M47.5,62c-0.624,0-1.222-0.231-1.683-0.651L33.801,49.333c-0.477-0.432-0.767-1.047-0.798-1.714c-0.031-0.667,0.198-1.307,0.647-1.801c0.93-1.019,2.514-1.092,3.531-0.167l10.293,10.413l17.298-17.371C65.27,38.224,65.92,37.997,66.57,38c0.668,0.019,1.288,0.297,1.747,0.783c0.459,0.485,0.701,1.12,0.682,1.788c-0.019,0.667-0.297,1.288-0.783,1.747l-18.989,18.99C48.75,61.758,48.141,62,47.5,62z M35.509,45.999c-0.409,0-0.82,0.165-1.119,0.493c-0.269,0.296-0.407,0.68-0.388,1.08s0.192,0.769,0.488,1.038l12.018,12.017c0.526,0.477,1.469,0.484,2.022-0.036l18.989-18.99c0.302-0.285,0.469-0.657,0.48-1.058c0.011-0.4-0.134-0.781-0.409-1.072c-0.275-0.292-0.648-0.458-1.049-0.47c-0.392-0.019-0.78,0.133-1.071,0.409L47.828,57.126c-0.094,0.094-0.222,0.147-0.354,0.147h-0.001c-0.133,0-0.261-0.054-0.354-0.148L36.49,46.372C36.215,46.123,35.863,45.999,35.509,45.999z"
              />
            </g>
          </svg>
          <Text>Congratulations!</Text>
          <TextLight>
            Your order has been placed successfully, you’ll be contacted via
            email shortly
          </TextLight>
          <Container className="radio">
            <span>
              <input type="radio"></input>
            </span>
            <TextLight launchDate>
              To Know when NeighborTailor officially launches
            </TextLight>
          </Container>
          <Container>
            <Text wedding>Visit Wedding site.</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default OrderCompleted;
