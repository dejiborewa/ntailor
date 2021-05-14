import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/nav";
import BackAndTotal from "../components/backAndTotal";
import FormBubaMobile from "../components/formBubaMobile";
import FormBubaDesktop from "../components/formBubaDesktop";
import FormSokotoMobile from "../components/formSokotoMobile";
import FormSokotoDesktop from "../components/formSokotoDesktop";
import { Text } from "./store";
import Up from "./assets/form/up-arrow.png";
import Down from "./assets/form/down-arrow.png";
import { Link, useHistory } from "react-router-dom";

const Container = styled.div`
  &.wrapper {
    margin: 0 1em;
  }

  &.buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.form {
    margin: 2em 0;
    padding: 1em;
    border: 1px solid var(--color-border);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &.button-wrapper {
    width: auto;
    margin-left: -1em;
    margin-right: -1em;
  }

  &.head {
    margin: 0.3em 0;
  }

  @media (min-width: 768px) {
    &.form {
      width: 80%;
      margin: 2em auto;
    }

    &.wrapper {
      padding: 0 2em;
    }

    &#formContainer-fila {
      padding: 0 1em;
    }

    &.button-wrapper {
      display: flex;
      justify-content: flex-end;
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    &.form {
      width: 70%;
      margin: 2em auto;
    }

    &.wrapper {
      padding: 0 3em;
    }
  }
`;

export const Label = styled.label`
  color: rgba(4, 15, 41, 0.7);
`;

const Input = styled.input`
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
    width: 100%;
  }
`;

const FormContainer = styled.form`
  @media (min-width: 768px) {
    padding-bottom: 1em;
  }
`;

const Button = styled.button`
  border-radius: 48px;
  border: 1px solid black;
  padding: 0.5em;
  cursor: pointer;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled(Container)`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: var(--color-footerBg);
  text-align: center;
  cursor: pointer;
`;

const Heading = styled(Text)`
  font-weight: bolder;
`;

const Image = styled.img`
  width: 1.9em;
  padding: 2px;
  margin: 0 auto;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 2em 0;
  color: white;
  background: var(--color-footerBg);
  outline: 0;
  border: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 1em 2em;
    width: 10em;
    border-radius: 10px;
  }
`;

const Span = styled.span`
  font-weight: 300;
  font-style: italic;
`;

const Form = () => {
  const [closeFormBuba, setCloseFormBuba] = useState(false);
  const [closeFormSokoto, setCloseFormSokoto] = useState(false);
  const [closeFormFila, setCloseFormFila] = useState(false);

  const [width, setWidth] = useState(
    document.documentElement.clientWidth || window.innerWidth
  );

  useEffect(() => {
    // check browser width
    const changeForm = () => {
      setWidth(document.documentElement.clientWidth || window.innerWidth);
    };
    window.addEventListener("resize", changeForm);
    return () => {
      window.removeEventListener("resize", changeForm);
    };
  }, []);

  useEffect(() => {
    //  Hides and reveals formBuba
    if (closeFormBuba === true) {
      document.getElementById("form-container-buba").style.display = "none";
    } else if (closeFormBuba === false) {
      document.getElementById("form-container-buba").style.display = "block";
    }
  }, [closeFormBuba]);

  useEffect(() => {
    // Hides and reveals formSokoto
    if (closeFormSokoto === true) {
      document.getElementById("form-container-sokoto").style.display = "none";
    } else if (closeFormSokoto === false) {
      document.getElementById("form-container-sokoto").style.display = "block";
    }
  }, [closeFormSokoto]);

  useEffect(() => {
    // Hides and Reveals formFila
    if (closeFormFila === true) {
      document.getElementById("form-container-fila").style.display = "none";
    } else if (closeFormFila === false) {
      document.getElementById("form-container-fila").style.display = "block";
    }
  }, [closeFormFila]);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/checkout");
  };

  return (
    <Container>
      <Nav />
      <Container className="wrapper">
        <BackAndTotal location="/upload" />
        <Text>GET MEASURED</Text>
        <Container className="buttons">
          <a href="/measurements" target="_blank">
            <Button measurement>View Measurement guide</Button>
          </a>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Text style={{ color: "var(--color-footerBg)", fontWeight: "400" }}>
              {width >= 768 ? "Need help getting measured?" : "Need Help?"}
            </Text>
          </Link>
        </Container>
        <FormContainer id="entire-form" onSubmit={handleSubmit}>
          <Container className="form">
            <HeadingContainer>
              <Heading>
                BUBA/TOP <Span>(inches)</Span>
              </Heading>
              <Icon onClick={() => setCloseFormBuba(!closeFormBuba)}>
                {closeFormBuba ? (
                  <Image src={Down} alt="close-form" />
                ) : (
                  <Image src={Up} alt="open-form" />
                )}
              </Icon>
            </HeadingContainer>
            {width >= 768 ? <FormBubaDesktop /> : <FormBubaMobile />}
          </Container>
          <Container className="form">
            <HeadingContainer>
              <Heading>
                SOKOTO/TROUSER <Span>(inches)</Span>
              </Heading>
              <Icon onClick={() => setCloseFormSokoto(!closeFormSokoto)}>
                {closeFormSokoto ? (
                  <Image src={Down} alt="close-form" />
                ) : (
                  <Image src={Up} alt="open-form" />
                )}
              </Icon>
            </HeadingContainer>
            {width >= 768 ? <FormSokotoDesktop /> : <FormSokotoMobile />}
          </Container>
          <Container className="form">
            <HeadingContainer>
              <Heading>
                FILA/CAP <Span>(inches)</Span>
              </Heading>
              <Icon onClick={() => setCloseFormFila(!closeFormFila)}>
                {closeFormFila ? (
                  <Image src={Down} alt="open-form" />
                ) : (
                  <Image src={Up} alt="open-form" />
                )}
              </Icon>
            </HeadingContainer>
            <Container id="form-container-fila">
              <Container className="head">
                <Label htmlFor="head">Head Width</Label>
                <Input type="number" id="head" />
              </Container>
            </Container>
          </Container>
          <Container className="button-wrapper">
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </Container>
        </FormContainer>
      </Container>
    </Container>
  );
};

export default Form;
