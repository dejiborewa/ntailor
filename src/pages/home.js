import React from "react";
import styled from "styled-components";
import Nav from "../components/nav";
import Footer from "../components/footer";
import couples_wide from "./assets/home/couples_wide.jpeg";
import { Link } from "react-router-dom";

const Container = styled.div`
  &.event-type {
    display: none;
  }

  &.description-wide {
    display: none;
  }

  @media (min-width: 768px) {
    &.description {
      display: none;
    }

    &.event-type {
      display: block;
    }

    &.description-wide {
      display: block;
      width: 80%;
      margin: 1em auto;
      padding: 0 2em;
    }
  }
`;

const EventContainer = styled.div`
  background: var(--color-darkBg);
  padding: 1.4em;

  @media (min-width: 600px) {
    padding: 4em;
  }

  @media (min-width: 768px) {
    width: 80%;
    background: white;
    margin: 1em auto;
    padding: 2em;
  }
`;

const Event = styled(Container)`
  background: var(--color-lightBg);
  text-align: center;
  padding: 1em;
  border-radius: 20px;

  @media (min-width: 768px) {
    display: flex;
    background: var(--color-lightBg2);
    justify-content: space-around;
  }
`;

const Title = styled.h4`
  color: var(--color-text);
  margin: 0 0 0.5em;
  font-weight: 900;
`;

const Text = styled.p`
  margin-top: 0;
  padding: 0 0.5em;

  &.banner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 1.2em 0 0;
    padding: 0;
    color: var(--color-text-light);
    font-weight: bold;
    font-size: 1.7em;
    text-align: center;
  }

  @media (min-width: 768px) {
    &.banner {
      margin: 0;
    }
  }
`;

const ImageContainer = styled(Container)`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),
    url(${couples_wide});
  background-size: cover;
  width: 100%;
  height: 50vh;

  @media (min-width: 768px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),
      url(${couples_wide});
  }
`;

const Home = () => {
  return (
    <Container>
      <Nav />
      <Container>
        <ImageContainer>
          <Text className="banner">Henry & Dayo's Wedding Ceremony</Text>
        </ImageContainer>
      </Container>
      <EventContainer>
        <Event>
          <Container className="description">
            <Title>Event Description</Title>
            <Text>
              Thank you very much for accepting and wanting to celebrate our
              wedding day with us and making it very special. We look forward to
              hosting you and gracing us with your presence.
              #HappilyEverAyansola.
            </Text>
          </Container>
          <Container className="event-type">
            <Title>Event Type</Title>
            <Text>Wedding Ceremony</Text>
          </Container>
          <Container>
            <Title>Date</Title>
            <Text>23rd September, 2021</Text>
          </Container>
          <Container>
            <Title>Aso-Ebi Fabric</Title>
            <Text>Male Guest Only</Text>
          </Container>
        </Event>
      </EventContainer>
      <Container className="description-wide">
        <Title>Event Description</Title>
        <Text>
          Thank you very much for accepting and wanting to celebrate our wedding
          day with us and making it very special. We look forward to hosting you
          and gracing us with your presence. #HappilyEverAyansola.
        </Text>
      </Container>
      <>
        <Link to="/store" style={{ textDecoration: "none" }}>
          <Footer text="GO TO STORE" />
        </Link>
      </>
    </Container>
  );
};

export default Home;
