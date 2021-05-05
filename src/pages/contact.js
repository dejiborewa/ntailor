import React from "react";
import styled from "styled-components";
import Nav from "../components/nav";


const Container = styled.div`
  &.main {
    margin-top: 3em;
  }

  &.form {
    background: var(--color-lightBg2);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding: 1em 0;
    margin: 0 1em;
  }

  &.button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin: 1em;
  }

  @media (min-width: 768px) {
    &.main {
      margin: 3em;
    }
  }

  @media (min-width: 1024px) {
    &.main {
      margin: 5em 15em;
    }
  }
`;

const Text = styled.h4`
  text-align: center;
  font-weight: 300;
`;

const Label = styled.label``;

const Input = styled.input`
  display: block;
  width: 90%;
  margin: 1em auto;
  padding: 1em;
  border: 1px solid var(--color-text);
  border-radius: 16px;
  font-family: inherit;
  outline: 0;
  text-indent: 5px;

  &:focus {
    border: 2px solid var(--color-footerBg);
  }
`;

const FormContainer = styled.form``;

const TextArea = styled.textarea`
  width: 90%;
  min-height: 10em;
  display: block;
  font-family: inherit;
  margin: 1em auto;
  padding: 1em;
  outline: 0;
  border-radius: 16px;
  text-indent: 5px;
`;

const Button = styled.button`
  background: var(--color-footerBg);
  box-shadow: 0px 10px 30px rgba(56, 172, 237, 0.1);
  border-radius: 10px;
  color: white;
  padding: 1em 2em;
  margin-top: 1em;
  border: 0;
  outline: 0;
`;

const SubmitButton = () => {
  return (
    <Container className="button-wrapper">
      <Button type="submit">SEND</Button>{" "}
    </Container>
  );
};

const Contact = () => {
  return (
    <Container>
      <Nav />
      <Container className="main">
        <Container>
          <Text>We love to hear from you! Send us a message </Text>
        </Container>
        <FormContainer>
          <Container className="form">
            <Label htmLFor="name"></Label>
            <Input type="text" id="name" placeholder="Name" required />
            <Label htmlFor="email"></Label>
            <Input
              type="email"
              id="email"
              placeholder="Email address"
              required
            />
            <Label htmlFor="message"></Label>
            <TextArea id="message" placeholder="Message" required></TextArea>
          </Container>
          <SubmitButton text="SEND" />
        </FormContainer>
      </Container>
    </Container>
  );
};

export default Contact;
