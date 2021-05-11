import React from "react";
import styled from "styled-components";
import Nav from "../components/nav";
import { BackButton } from "../components/backAndTotal";
import { Link } from "react-router-dom";

const Container = styled.div`
  &.price-container {
    background: var(--color-lightBg2);
    margin: 1em;
    border-radius: 16px;
    padding: 0.5em;
  }

  &.price {
    display: flex;
    justify-content: space-between;
  }

  &.total {
    display: flex;
    justify-content: space-between;
    background: var(--color-text);
    margin: 2em 1em;
    border-radius: 16px;
    padding: 0 0.6em;
  }

  &.pay {
    background: var(--color-text);
    margin: 2em 1em;
    border-radius: 16px;
    cursor: pointer;
  }

  &.help {
    margin: 2em 1em;
    text-align: center;
  }

  &.back {
    width: 5em;
    margin-left: 1em;
    margin-top: 1em;
  }

  @media (min-width: 768px) {
    &.main {
      margin: 0 3em;
    }

    &.back {
      margin-left: 3em;
    }

    &.total,
    &.pay {
      margin: 2em 4em;
    }
  }

  @media (min-width: 1024px) {
    &.main {
      display: flex;
    }

    &.left,
    &.right {
      width: calc(100% / 2);
    }
  }
`;

const Text = styled.h4`
  color: ${(props) => (props.total ? "white" : "#373737")};
`;

const Price = styled(Text)`
  color: ${(props) => (props.total ? "white" : "var(--color-footerBg)")};
`;

export const TextEnd = styled(Price)`
  font-weight: 500;
  margin: 1em 0;
`;

const Pay = styled(Text)`
  color: white;
  padding: 1.33em 0;
  text-align: center;
`;

const FormContainer = styled.form`
  margin: 0 1em;
  padding: 1em;
  border: 1px solid var(--color-border);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const Heading = styled.h4`
  color: (--color-text-secondary);
  font-weight: 300;
  margin-top: 0;
`;

const Label = styled.label``;
const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid var(--color-text);
  border-radius: 10px;
  padding: 1em 0;
  margin: 0.5em 0;
  text-indent: 10px;
  font-family: inherit;
  outline: none;

  &:focus {
    border: 2px solid var(--color-footerBg);
  }
`;

const Button = styled.button`
  background: inherit;
  color: inherit;
  border: 0;
  outline: 0;
`;

const Checkout = () => {
  return (
    <Container>
      <Nav />
      <Container className="back">
        <Link to="/form" style={{ textDecoration: "none" }}>
          <BackButton />
        </Link>
      </Container>
      <Container className="main">
        <Container className="left">
          <Container className="price-container">
            <Container className="price">
              <Text>Fabric & Production</Text>
              <Price>$220.00</Price>
            </Container>
            <Container className="price">
              <Text>Delivery</Text>
              <Price>Free</Price>
            </Container>
            <Container className="price">
              <Text>Tax</Text>
              <Price>$5.00</Price>
            </Container>
          </Container>
          <Container className="total">
            <Text total>TOTAL</Text>
            <Price total>$225</Price>
          </Container>
        </Container>
        <Container className="right">
          <Container>
            <FormContainer>
              <Heading>ENTER DELIVERY DETAILS</Heading>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Diran Adelekun" />
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                id="email"
                placeholder="diranadelekun@gmail.com"
              />
              <Label htmlFor="phone">Phone number</Label>
              <Input type="tel" id="phone" placeholder="+2348140564969" />
              <Label htmlFor="address">Enter delivery address</Label>
              <Input
                type="text"
                id="address"
                placeholder="5, Ikeja Road, Lagos."
                required
              />
            </FormContainer>
          </Container>
          <Container className="pay">
            <Pay>
              <Button type="submit">
                Pay<span style={{ marginLeft: ".5em" }}>$225</span>
              </Button>
            </Pay>
          </Container>
        </Container>
      </Container>
      <Container className="help">
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <TextEnd>NEED HELP?</TextEnd>
        </Link>
      </Container>
    </Container>
  );
};

export default Checkout;
