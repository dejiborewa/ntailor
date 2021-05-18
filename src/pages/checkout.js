import React from "react";
import styled from "styled-components";
import Nav from "../components/nav";
import agbada from "../components/assets/displayStyle/agbada.png";
import dansiki from "../components/assets/displayStyle/dansiki.png";
import buba_style from "../components/assets/displayStyle/buba.png";
import abetiAja from "../components/assets/displayStyle/abetiaja.png";
import awolowo from "../components/assets/displayStyle/awolowo.png";
import gobi from "../components/assets/displayStyle/gobi.png";
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

  &.powered {
    margin-top: 1.1em;
    display: flex;
    justify-content: center;
    color: var(--color-text);
  }

  &.preview {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
  }

  &.preview-style,
  &.preview-cap {
    position: relative;
    min-width: 10.3em;
    min-height: 10.3em;
    background: var(--color-lightBg2);
    border: 2px solid #38aced;
    box-sizing: border-box;
    border-radius: 10px;
  }

  &.preview-cap {
    margin-left: 1em;
  }

  &.preview-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

    &.preview {
      justify-content: flex-start;
      margin: 2em 0 2em 4em;
    }

    &.email-phone,
    &.zip-city {
      display: flex;
    }

    &.email,
    &.phone,
    &.zip,
    &.city {
      width: 50%;
    }

    &.phone,
    .city {
      margin-left: 1em;
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

    &.preview {
      margin-bottom: 1em;
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

const Image = styled.img`
  display: block;
  margin-bottom: 0.5em;
`;

const Name = styled.h4`
  display: block;
  text-align: center;
  font-weight: lighter;
  color: #11163e;
  margin: 0;
`;

const Checkout = (props) => {
  const {selection} = props;
  return (
    <Container>
      <Nav />
      <Container className="back">
        <Link to="/form" style={{ textDecoration: "none" }}>
          <BackButton />
        </Link>
      </Container>
      <Container className="preview">
        <Container className="preview-style">
          {(selection.styles.agbada === true && (
            <Container className="preview-content">
              <Image src={agbada} />
              <Name>AGBADA</Name>
            </Container>
          )) ||
            (selection.styles.bubaAndSokoto === true && (
              <Container className="preview-content">
                <Image src={buba_style} />
                <Name>BUBA</Name>
              </Container>
            )) ||
            (selection.styles.dansiki === true && (
              <Container className="preview-content">
                <Image src={dansiki} />
                <Name>DANSIKI</Name>
              </Container>
            ))}
        </Container>
        {selection.fabric.fila === true && (
          <Container className="preview-cap">
            {(selection.caps.abetiAja === true && (
              <Container className="preview-content">
                <Image src={abetiAja} />
                <Name>ABETI AJA</Name>
              </Container>
            )) ||
              (selection.caps.awolowo === true && (
                <Container className="preview-content">
                  <Image src={awolowo} />
                  <Name>AWOLOWO</Name>
                </Container>
              )) ||
              (selection.caps.gobi === true && (
                <Container className="preview-content">
                  <Image src={gobi} />
                  <Name>GOBI</Name>
                </Container>
              ))}
          </Container>
        )}
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
              <Container className="email-phone">
                <Container className="email">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </Container>
                <Container className="phone">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="123-456-7890"
                    required
                  />
                </Container>
              </Container>
              <Label htmlFor="address">Enter delivery address</Label>
              <Input
                type="text"
                id="address"
                placeholder="2304 Oak Street, Old Forge, New York"
                required
              />
              <Container className="zip-city">
                <Container className="zip">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input
                    type="text"
                    id="zip"
                    pattern="[0-9]{5}"
                    placeholder="90013"
                    required
                  />
                </Container>
                <Container className="city">
                  <Label htmlFor="city">City</Label>
                  <Input type="text" id="city" placeholder="Alaska" required />
                </Container>
              </Container>
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
