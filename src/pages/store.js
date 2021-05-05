// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import Nav from "../components/nav";
import BackAndTotal from "../components/backAndTotal";
import DisplayStyle from "../components/displayStyle";
import Footer from "../components/footer";
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
import { Link, useHistory } from "react-router-dom";

// Data
const guestList = ["Male Guest"];
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
    position: relative;
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

  #blue-tick {
    display: none;
    position: absolute;
    top: 65%;
    left: 70%;
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
      position: sticky;
      -webkit-position: sticky;
      top: 0;
      height: 100vh;
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

const Select = styled.select`
  width: 100%;
  padding: 1em 0.5em;
  border: 1px solid var(--color-footerBg);
  border-radius: 10px;
  font-weight: bold;
  color: var(--color-text-secondary);
  outline: none;
  font-family: inherit;

  &:focus {
    border: 2px solid var(--color-footerBg);
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Option = styled.option`
  font-family: inherit;
  width: inherit;
`;

const Dropdown = () => {
  return (
    <Container>
      <Select name="guest-sex">
        {guestList.map((guest, index) => {
          return <Option key={index}>{guest}</Option>;
        })}
      </Select>
    </Container>
  );
};

const Store = () => {
  const [width, setWidth] = useState(
    // Track browser width
    document.documentElement.clientWidth || window.innerWidth
  );

  useEffect(() => {
    const checkSize = () => {
      // Re-render UI, when width changes
      setWidth(document.documentElement.clientWidth || window.innerWidth);
    };
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [width]);

  useEffect(() => {
    document.getElementsByClassName("list-item")[0].classList.add("focus");
  }, []);

  let history = useHistory();

  function handleClick() {
    history.push("/upload");
  }

  return (
    <Container>
      <Nav />
      <Container className="main">
        <Container className="left">
          <List id="list">
            {list.map((listItems, index) => {
              return (
                <ListItems
                  href="#fabric_wrapper"
                  key={index}
                  className="list-item"
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
              <Dropdown />
            </Container>
            <Container id="fabric_wrapper">
              {width >= 1024 ? <Section title="SHOP FABRIC" /> : <></>}
              <Text>CHOOSE A FABRIC</Text>
              <Container className="image_fabric" id="fabric">
                {image_path.map((image, index) => {
                  return (
                    <Container key={index} className="image_fabric_inner">
                      <Image src={image} loading="eager" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        width="40px"
                        height="40px"
                        id="blue-tick"
                      >
                        <path
                          fill="#8bb7f0"
                          d="M8,75.5c-1.9,0-3.5-1.6-3.5-3.5V8c0-1.9,1.6-3.5,3.5-3.5h64c1.9,0,3.5,1.6,3.5,3.5v64 c0,1.9-1.6,3.5-3.5,3.5H8z"
                        />
                        <path
                          fill="#4e7ab5"
                          d="M72,5c1.7,0,3,1.3,3,3v64c0,1.7-1.3,3-3,3H8c-1.7,0-3-1.3-3-3V8c0-1.7,1.3-3,3-3H72 M72,4H8 C5.8,4,4,5.8,4,8v64c0,2.2,1.8,4,4,4h64c2.2,0,4-1.8,4-4V8C76,5.8,74.2,4,72,4L72,4z"
                        />
                        <path
                          fill="#fff"
                          d="M33.9 56.3L19.9 42.2 24.1 38 33.9 47.8 58.6 23.1 62.9 27.3z"
                        />
                      </svg>
                    </Container>
                  );
                })}
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
          <Link
            to="/upload"
            style={{ textDecoration: "none" }}
            onClick={handleClick}
          >
            <Footer text="NEXT" />
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default Store;
