import React from "react";
import styled from "styled-components";
import Nav from "../components/nav";
import BackAndTotal from "../components/backAndTotal";
import Footer from "../components/footer";
import add from "./assets/upload/add.png";
import { Text } from "./store";
import { Link, useHistory } from "react-router-dom";

const Container = styled.div`
  &.wrapper {
    padding: 0 1em;
  }

  &.upload {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &.upload_logo {
    position: relative;
    width: 5em;
    height: 5em;
    margin: 0 auto 1em;
    border: 1px dashed white;
    border-radius: 50%;
  }

  &.upload_logo_inner {
    position: absolute;
    width: 3em;
    height: 3em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 50%;
  }

  &.upload_text {
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }

  &.upload_action {
    position: absolute;
    top: 30%;
    opacity: 0;
    width: 100%;
  }

  &.requests {
    margin: 1.5em 0;
  }

  &.add_image_container {
    width: 2em;
    height: 2em;
    margin: 0.3em auto 0;
  }

  @media (min-width: 768px) {
    font-size: 19px;

    &.upload {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &.requests {
      width: 85%;
      margin: 1.5em auto;
    }
  }

  @media (min-width: 1024px) {
    font-size: 22px;

    &.requests {
      width: 70%;
      margin: 1.5em auto;
    }
  }
`;

const UploadContainer = styled(Container)`
  position: relative;
  background: var(--color-text);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
  margin: 0.5em 0;
  border-radius: 20px;
  height: 60vh;
  color: white;

  @media (min-width: 768px) {
    width: 65%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 2em;
  margin: 0 auto;
`;

const Heading = styled.h3`
  margin: 0;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0.5em;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 5em;
  border: 1px solid var(--color-darkBg);
  border-radius: 10px;
  outline: 0;
  padding: 1em;
`;

const Span = styled.span`
  display: block;
  margin: 0.5em 0;
  font-weight: 500;
  font-style: italic;
`;

const Label = styled.label``;
const Input = styled.input``;

const Upload = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/form");
  }
  return (
    <>
      <Nav />
      <Container>
        <Container className="wrapper">
          <BackAndTotal location="/store" />
          <Container>
            <Text style={{ marginTop: 0 }}>
              UPLOAD DESIGN INSPIRATION
              <Span>
                **This is not a required field, although we strongly recommend
                you send us design inspir
                ations.
              </Span>
            </Text>
            <UploadContainer>
              <Container className="upload">
                <Container className="upload_logo">
                  <Container className="upload_logo_inner">
                    <Container className="add_image_container">
                      <Image src={add} alt="add_image" />
                    </Container>
                  </Container>
                  <Container className="upload_action">
                    <Label htmlFor="upload"></Label>
                    <Input
                      type="file"
                      id="upload"
                      accept="image/png, image/jpeg"
                    />
                  </Container>
                </Container>
                <Container className="upload_text">
                  <Heading>Upload photos</Heading>
                  <Paragraph>
                    Upload an image of a native style you’d like us to
                    replicate, your image must be in .JPG or .PNG format
                  </Paragraph>
                </Container>
              </Container>
            </UploadContainer>
          </Container>
          <Container className="requests">
            <Text>Any additional styling requests?</Text>
            <Container>
              <TextArea type="text"></TextArea>
            </Container>
          </Container>
        </Container>
        <Link
          to="/form"
          style={{ textDecoration: "none" }}
          onClick={handleClick}
        >
          <Footer text="NEXT" isSubmit={false}/>
        </Link>
      </Container>
    </>
  );
};

export default Upload;
