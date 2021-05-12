import React from "react";
import styled from "styled-components";
import agbadaLength from "./assets/measurement guide/agbadaLength.png";
import agbadaSleeve from "./assets/measurement guide/agbadaSleeve.png";
import ankle from "./assets/measurement guide/ankle.png";
import armLength from "./assets/measurement guide/armLength.png";
import belly from "./assets/measurement guide/belly.png";
import bubaTrouser from "./assets/measurement guide/bubaTrouser.png";
import bubaLength from "./assets/measurement guide/bubaLength.png";
import chest from "./assets/measurement guide/chest.png";
import head from "./assets/measurement guide/head.png";
import hipButtocks from "./assets/measurement guide/hipButtocks.png";
import knee from "./assets/measurement guide/knee.png";
import neck from "./assets/measurement guide/neck.png";
import armWidth from "./assets/measurement guide/armWidth.png";
import shoulders from "./assets/measurement guide/shoulders.png";
import thighs from "./assets/measurement guide/thighs.png";
import waist from "./assets/measurement guide/waist.png";
import wrist from "./assets/measurement guide/wristWidth.png";

const Container = styled.div`
  &.main {
    width: 90%;
    margin: 0.5em auto;
  }

  @media (min-width: 768px) {
    width: 80%;
    margin: 1em auto;
  }
`;
const Image = styled.img`
  margin: 0.3em 0;
  box-shadow: 1px 1px 2px 1.5px #ccc;
  width: 100%;
`;
const guides = [
  agbadaLength,
  agbadaSleeve,
  ankle,
  armLength,
  belly,
  bubaTrouser,
  bubaLength,
  chest,
  head,
  hipButtocks,
  knee,
  neck,
  armWidth,
  shoulders,
  thighs,
  waist,
  wrist,
];

const Measurements = () => {
  return (
    <Container className="main">
      {guides.map((guide, index) => {
        return (
          <Container key={index}>
            <Image src={guide} />
          </Container>
        );
      })}
    </Container>
  );
};

export default Measurements;
