import React from "react";
import styled from "styled-components";
import { Input } from "./formBubaMobile";
import { Label } from "../pages/form";

const Container = styled.div`
  &.waist-thighs,
  &.hip-kneeR,
  &.kneeF-ankle {
    display: flex;
    align-items: center;
    margin: 0.3em 0;
  }

  &.trouser {
    margin: 0.3em 0;
  }

  &.rightChild {
    margin-left: 1em;
  }

  @media (min-width: 389px) {
    &.rightChild,
    &.leftChild {
      min-width: calc(100% / 2);
    }
  }
`;

const formSokotoMobile = ({ onChange }) => {
  return (
    <Container id="form-container-sokoto">
      <Container className="waist-thighs">
        <Container className="leftChild">
          <Label htmlFor="waist">Waist</Label>
          <Input
            type="number"
            id="waist"
            required
            onKeyUp={onChange}
            step=".01"
          />
        </Container>
        <Container className="rightChild">
          <Label htmlFor="thighs">Thighs</Label>
          <Input
            type="number"
            id="thighs"
            required
            onKeyUp={onChange}
            step=".01"
          />
        </Container>
      </Container>
      <Container className="hip-kneeR">
        <Container className="leftChild">
          <Label htmlFor="hip">Hip</Label>
          <Input
            type="number"
            id="hip"
            required
            onKeyUp={onChange}
            step=".01"
          />
        </Container>
        <Container className="rightChild">
          <Label htmlFor="relaxed_knee">Knee Relaxed</Label>
          <Input
            type="number"
            id="relaxed_knee"
            required
            onKeyUp={onChange}
            step=".01"
          />
        </Container>
      </Container>
      <Container className="kneeF-ankle">
        <Container className="leftChild">
          <Label htmlFor="flexed_knee">Knee Flexed</Label>
          <Input
            type="number"
            id="flexed_knee"
            required
            onKeyUp={onChange}
            step=".01"
          />
        </Container>
        <Container className="rightChild">
          <Label htmlFor="ankle">Ankle</Label>
          <Input
            type="number"
            id="ankle"
            required
            onKeyUp={onChange}
            step=".01"
          />
        </Container>
      </Container>
      <Container className="trouser">
        <Container className="leftChild">
          <Label htmlFor="trouser_length">Trouser Length</Label>
          <Input
            type="number"
            id="trouser_length"
            required
            onKeyUp={onChange}
            step=".01"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default formSokotoMobile;
