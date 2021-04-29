// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import Nav from "../components/nav";
import Footer from "../components/footer";
import DisplayStyle from "../components/displayStyle";
import BackAndTotal from "../components/backAndTotal";
import Section from "../components/section";

// Assets
import buba from "./assets/store/buba.jpeg";
import fila from "./assets/store/fila.jpeg";
import agbada from "../components/assets/displayStyle/agbada.png";
import dansiki from "../components/assets/displayStyle/dansiki.png";
import buba_style from "../components/assets/displayStyle/buba.png";
import abetiAja from "../components/assets/displayStyle/abetiaja.png";
import awolowo from "../components/assets/displayStyle/awolowo.png";
import gobi from "../components/assets/displayStyle/gobi.png";

// Recat router DOM
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
    link: "group_wrapper",
  },
  {
    title: "SHOP FABRIC",
    link: "fabric_wrapper",
  },
  {
    title: "STYLE OUTFIT",
    link: "outfit_wrapper",
  },
];

// Styles
const Container = styled.div`
  color: var(--color-text-secondary);

  &.image_fabric {
    display: flex;
  }

  &.image_fabric_inner {
    margin-right: 0.5em;
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
    }

    &.right {
      width: 80%;
    }
  }
`;

export const Text = styled.h4`
  font-weight: lighter;
  margin: 0.8em 0;
  color: var(--color-text-secondary);
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
  margin-bottom: 0.35em;
  border-left: 2px solid var(--color-border);
  color: var(--color-text-secondary);
  padding-left: 0.4em;
  cursor: pointer;

  &.focus {
    color: var(--color-darkBg);
    font-weight: bold;
    border-color: var(--color-darkBg);
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Store = () => {
  const [width, setWidth] = useState(
    document.documentElement.clientWidth || window.innerWidth
  );

  useEffect(() => {
    const checkSize = () => {
      setWidth(document.documentElement.clientWidth || window.innerWidth);
    };
    window.addEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    const listItems = document.getElementsByClassName("list_links");
    listItems[0].classList.add("focus");
  }, []);

  /*const handleClick = () => {
    const listItems = document.getElementsByClassName("list_links");
    document.getElementById("list_links").addEventListener("click", (event) => {
      event.preventDefault();
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("focus");
      }
      event.target.classList.add("focus");
    });
  }  
  */

  return (
    <Container>
      <Nav />
      <Container className="main">
        <Container className="left">
          <List id="list_links">
            {list.map((listItems, index) => {
              return (
                <ListItems
                  href="#fabric_wrapper"
                  key={index}
                  className="list_links"
                >
                  <Anchor href={`#${listItems.link}`}>{listItems.title}</Anchor>
                </ListItems>
              );
            })}
          </List>
        </Container>
        <Container className="right">
          <Container className="wrapper">
            <BackAndTotal location="/" />
            <Container className="guest" id="group_wrappper">
              {width >= 1024 ? (
                <Section title="AVAILABLE GROUP" />
              ) : (
                <Text>AVAILABLE GROUP</Text>
              )}
              <Input type="text" placeholder="Male Guest" />
            </Container>
            <Container id="fabric_wrapper">
              {width >= 1024 ? <Section title="SHOP FABRIC" /> : <></>}
              <Text>CHOOSE A FABRIC</Text>
              <Container className="image_fabric" id="fabric">
                <>
                  {image_path.map((image, index) => {
                    return (
                      <Container key={index} className="image_fabric_inner">
                        <Image src={image} loading="eager" />
                      </Container>
                    );
                  })}
                </>
              </Container>
            </Container>
            <Container id="outfit_wrapper">
              {width >= 1024 ? <Section title="STYLE OUTFIT" /> : <></>}
              <Container>
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
      </Container>
      <Link to="/upload" style={{ textDecoration: "none" }}>
        <Footer text="NEXT" />
      </Link>
    </Container>
  );
};

export default Store;
