import React from "react";
import styled from "styled-components";
import { Label } from "../pages/form";

const Container = styled.div`
  &.neck-shoulder,
  &.sleeve-armWidth,
  &.armWidth-wrist,
  &.chest-belly,
  &.buba-agbada {
    display: flex;
    align-items: center;
    margin: 0.3em 0;
  }

  &.agbada {
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

export const Input = styled.input`
  display: block;
  padding: 0.5em 0;
  margin-top: 0.5em;
  text-indent: 5px;
  border: 1px solid var(--color-darkBg);
  border-radius: 10px;
  width: 100%;
  outline: none;

  &:focus {
    border: 2px solid var(--color-footerBg);
  }

  @media (min-width: 389px) {
    width: calc(100% - 1em);
  }
`;

const FormBubaMobile = () => {
  return (
    <Container id="form-container-buba">
      <Container className="buba">
        <Container className="neck-shoulder">
          <Container className="leftChild">
            <Label htmlFor="neck">Neck</Label>
            <Input type="number" id="neck" required />
          </Container>
          <Container className="rightChild">
            <Label htmlFor="shoulder">Shoulder/Back</Label>
            <Input type="number" id="shoulder" />
          </Container>
        </Container>
        <Container className="sleeve-armWidth">
          <Container className="leftChild">
            <Label htmlFor="sleeve">Sleeve length</Label>
            <Input type="number" id="sleeve" required />
          </Container>
          <Container className="rightChild">
            <Label htmlFor="arm-width-r">Arm width relaxed</Label>
            <Input type="number" id="arm-width-r" required />
          </Container>
        </Container>
        <Container className="armWidth-wrist">
          <Container className="leftChild">
            <Label htmlFor="arm-widthF">Arm width flexed</Label>
            <Input type="number" id="arm-widthF" required />
          </Container>
          <Container className="rightChild">
            <Label htmlFor="wrist">Wrist Width</Label>
            <Input type="number" id="wrist" required />
          </Container>
        </Container>
        <Container className="chest-belly">
          <Container className="leftChild">
            <Label htmlFor="chest">Chest</Label>
            <Input type="number" id="chest" required />
          </Container>
          <Container className="rightChild">
            <Label htmlFor="belly">Belly</Label>
            <Input type="number" id="belly" required />
          </Container>
        </Container>
        <Container className="buba-agbada">
          <Container className="leftChild">
            <Label htmlFor="buba">Buba Length</Label>
            <Input type="number" id="buba" required />
          </Container>
          <Container className="rightChild">
            <Label htmlFor="agbada">Agbada Sleeve</Label>
            <Input type="number" id="agbada" required />
          </Container>
        </Container>
        <Container className="agbada">
          <Container className="leftChild">
            <Label htmlFor="agbadaL">Agbada Length</Label>
            <Input type="number" id="agbadaL" required />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default FormBubaMobile;

/* <Container className="rightChild">
  <Label htmlFor="trouser">Trouser Length</Label>
  <Input type="number" id="trouser" required />
</Container>; 

&.thighs-hip,
  &.kneeR-kneeF,
  &.ankle-trouser


*/