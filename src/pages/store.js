// Dependencies
import React, { useState } from "react";
import styled from "styled-components";

// Components
import Nav from "../components/nav";
import Footer from "../components/footer";
import BackButton from "../components/backbutton";
import DisplayStyle from "../components/displayStyle";

// Assets
import buba from "./assets/store/buba.jpeg";
import fila from "./assets/store/fila.jpeg";
import agbada from "../components/assets/displayStyle/agbada.png";
import dansiki from "../components/assets/displayStyle/dansiki.png";
import buba_style from "../components/assets/displayStyle/buba.png";
import abetiAja from "../components/assets/displayStyle/abetiaja.png";
import awolowo from "../components/assets/displayStyle/awolowo.png";
import gobi from "../components/assets/displayStyle/gobi.png";

// React router
import { Link } from "react-router-dom";

// Data
const image_path = [buba, fila];

const styleData = [
  {
    style: agbada,
    name: "AGBADA",
  },
  {
    style: buba_style,
    name: "BUBA & SOKOTO",
  },
  {
    style: dansiki,
    name: "DANSIKI",
  },
];

const capStyleData = [
  {
    style: abetiAja,
    name: "ABETI AJA",
  },
  {
    style: awolowo,
    name: "AWOLOWO",
  },
  {
    style: gobi,
    name: "GOBI",
  },
];

const list = [
  {
    title: "SELECT GROUP",
    link: "group",
  },
  {
    title: "SHOP FABRIC",
    link: "fabric",
  },
  {
    title: "STYLE OUTFIT",
    link: "outfit",
  },
];

// Styles
const Container = styled.div`
  color: var(--color-text-secondary);

  &.image_fabric {
    display: flex;
    gap: 0.7em;
  }

  &.back {
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
    align-items: center;
  }

  &.wrapper {
    padding: 0 1em;
    margin: 0 0 0.5em;
  }

  &.guest {
    padding: 0 0 1em;
  }

  &.left {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    &.main {
      display: flex;
    }

    &.left {
      display: block;
      width: 20%;
      background: var(--color-stylesBg);
      padding-top: 1.5em;
    }

    &.right {
      width: 80%;
      padding: 1.5em;
    }
  }
`;

const Text = styled.h4`
  font-weight: lighter;
  margin: 0.8em 0;
`;

const Input = styled.input`
  border: 1px solid #38aced;
  border-radius: 10px;
  padding: 1em 0.5em;
  width: 100%;
  font-weight: bolder;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 9em;
  border-radius: 10px;
  cursor: pointer;

  &.active-fabric {
    opacity: 0.5;
  }

  @media (min-width: 452px) {
    width: 10.3em;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 1em;
  height: 100vh;
`;

const ListItems = styled.li`
  list-style-type: none;
  margin-bottom: 0.3em;
  border-left: 2px solid var(--color-border);
  color: var(--color-text-secondary);
  padding-left: 0.4em;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Store = () => {
  const [fabricSelection, setFabricSelection] = useState(false);

  return (
    <Container>
      <Nav />
      <Container className="main">
        <Container className="left">
          <List>
            {list.map((listItems, index) => {
              return (
                <ListItems key={index}>
                  <Anchor href={listItems.link}>{listItems.title}</Anchor>
                </ListItems>
              );
            })}
          </List>
        </Container>
        <Container className="right">
          <Container className="wrapper">
            <Container className="back">
              <Link to="/">
                <BackButton>Back</BackButton>
              </Link>
              <Container>TOTAL: $45.00</Container>
            </Container>
            <Container className="guest">
              <Text>AVAILABLE GROUP</Text>
              <Input type="text" placeholder="Male Guest" />
            </Container>
            <Container>
              <Text>CHOOSE A FABRIC</Text>
              <Container className="image_fabric" id="fabric">
                <>
                  {image_path.map((image, index) => {
                    return (
                      <Container
                        onClick={() => setFabricSelection(!fabricSelection)}
                        key={index}
                      >
                        <Image src={image} loading="eager" />
                      </Container>
                    );
                  })}
                </>
              </Container>
            </Container>
            <Container to="/fabric">
              <Text>CHOOSE A STYLE</Text>
              <DisplayStyle
                array={styleData}
                id="styles"
                id_primary="styles_primary"
                id_secondary="styles_secondary"
              />
            </Container>
            <Container>
              <Text>SELECT CAP STYLE</Text>
              <DisplayStyle
                array={capStyleData}
                id="caps"
                id_primary="caps_primary"
                id_secondary="caps_secondary"
              />
            </Container>
          </Container>
        </Container>
      </Container>
      <Footer text="NEXT" />
    </Container>
  );
};

export default Store;
