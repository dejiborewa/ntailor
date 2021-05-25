import React from "react";
import styled from "styled-components";
import { Label } from "../pages/form";

const Container = styled.div`
  &.form-container-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 1em;
    row-gap: 1em;
    padding: 0 1em;
  }
`;

export const Input = styled.input`
  display: block;
  border-radius: 10px;
  padding: 0.5em 0;
  text-indent: 5px;
  border: 1px solid var(--color-darkBg);
  outline: none;
  margin-top: 0.5em;
  width: 100%;

  &:focus {
    border: 2px solid var(--color-footerBg);
  }
`;

const FormBubaDesktop = (props) => {
  const { selection } = props;
  return (
    <Container id="form-container-buba">
      <Container className="form-container-wrapper">
        <Container>
          <Label htmlFor="neck">Neck</Label>
          <Input type="number" id="neck" step=".01" required />
        </Container>
        <Container>
          <Label htmlFor="shoulder">Shoulder/Back</Label>
          <Input type="number" id="shoulder" step=".01" required />
        </Container>
        <Container>
          <Label htmlFor="sleeve">Sleeve length</Label>
          <Input type="number" id="sleeve" step=".01" required />
        </Container>
        <Container>
          <Label htmlFor="arm-width-r">Arm width relaxed</Label>
          <Input type="number" id="arm-width-r" step=".01" required />
        </Container>
        <Container>
          <Label htmlFor="arm-widthF">Arm width flexed</Label>
          <Input type="number" id="arm-widthF" step=".01" required />
        </Container>
        <Container>
          <Label htmlFor="wrist">Wrist Width</Label>
          <Input type="number" id="wrist" step=".01" required />
        </Container>
        <Container>
          <Label htmlFor="chest">Chest</Label>
          <Input type="number" id="chest" step=".01" required />
        </Container>
        <Container>
          <Label htmlFor="belly">Belly</Label>
          <Input type="number" id="belly" step=".01" required />
        </Container>
        {selection.styles.agbada && (
          <>
            <Container>
              <Label htmlFor="agbada">Agbada Sleeve</Label>
              <Input type="number" id="agbada" step=".01" required />
            </Container>
            <Container>
              <Label htmlFor="agbadaL">Agbada Length</Label>
              <Input type="number" id="agbadaL" step=".01" required />
            </Container>
          </>
        )}
      </Container>
    </Container>
  );
};

export default FormBubaDesktop;
