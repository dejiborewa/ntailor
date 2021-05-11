import React from "react";
import styled from "styled-components";
import { Label } from "../pages/form";
import { Input } from "./formBubaDesktop";

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

const FormSokotoDesktop = () => {
  return (
    <Container id="form-container-sokoto">
      <Container className="form-container-wrapper">
        <Container>
          <Label htmlFor="waist">Waist</Label>
          <Input type="number" id="waist" required />
        </Container>
        <Container>
          <Label htmlFor="thighs">Thighs</Label>
          <Input type="number" id="thighs" required />
        </Container>
        <Container>
          <Label htmlFor="hip">Hip</Label>
          <Input type="number" id="hip" required />
        </Container>
        <Container>
          <Label htmlFor="kneeR">Knee Relaxed</Label>
          <Input type="number" id="kneeR" required />
        </Container>
        <Container>
          <Label htmlFor="kneeF">Knee Flexed</Label>
          <Input type="number" id="kneeF" required />
        </Container>
        <Container>
          <Label htmlFor="ankle">Ankle</Label>
          <Input type="number" id="ankle" required />
        </Container>
        <Container>
          <Label htmlFor="trouser">Trouser Length</Label>
          <Input type="number" id="trouser" required />
        </Container>
      </Container>
    </Container>
  );
};

export default FormSokotoDesktop;
