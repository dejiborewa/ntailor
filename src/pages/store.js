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
import couples from "./assets/home/couples_wide.jpeg";
import asoEbi from "./assets/store/buba.jpeg";
import fila from "./assets/store/fila.jpeg";
import agbada from "../components/assets/displayStyle/agbada.png";
import dansiki from "../components/assets/displayStyle/dansiki.png";
import buba_style from "../components/assets/displayStyle/buba.png";
import abetiAja from "../components/assets/displayStyle/abetiaja.png";
import awolowo from "../components/assets/displayStyle/awolowo.png";
import gobi from "../components/assets/displayStyle/gobi.png";

// Recat router DOM
import { useHistory } from "react-router-dom";

// Data
const guestList = ["Male Guest"];

const image_path = [
  {
    path: asoEbi,
    name: "asoEbi",
    text: "ASO-EBI (FAMILY FABRIC)",
  },
  {
    path: fila,
    name: "fila",
    text: "FILA (CAP)",
  },
];

const styleData = [
  {
    style: agbada,
    text: "AGBADA",
    name: "agbada",
  },
  {
    style: buba_style,
    text: "BUBA & SOKOTO",
    name: "bubaAndSokoto",
  },
  {
    style: dansiki,
    text: "DANSIKI",
    name: "dansiki",
  },
];

const capStyleData = [
  {
    style: abetiAja,
    text: "ABETI AJA",
    name: "abetiAja",
  },
  {
    style: awolowo,
    text: "AWOLOWO",
    name: "awolowo",
  },
  {
    style: gobi,
    text: "GOBI",
    name: "gobi",
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

  &.header-wrapper {
    display: none;
  }

  &.image_fabric {
    display: flex;
  }

  &.image_fabric_inner {
    position: relative;
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

  .blue-tick-container {
    position: absolute;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0.5em;
    width: 100%;
    height: 9em;
    top: 0;
  }

  @media (min-width: 452px) {
    .blue-tick-container {
      width: 10.3em;
    }
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    &.main {
      display: flex;
      
    }

    &.header-wrapper {
      display: block;
      background: var(--color-darkBg);
      padding: 2em 0 4em 0;
    }

    &.header {
      display: flex;
      width: 85%;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
    }

    &.header-left {
      color: white !important;
      width: 50%;
    }

    &.header-right {
      width: 7.5em;
    }

    &.date {
      color: white !important;
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
`;

const Anchor = styled.a`
  border-left: 2px solid var(--color-border);
  color: var(--color-text-secondary);
  padding-left: 0.4em;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &.focus {
    color: var(--color-darkBg);
    font-weight: bold;
    border-color: var(--color-darkBg);
  }
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

const Heading = styled.h3`
  margin-top: 0;
`;
const Paragraph = styled.p`
  font-weight: 300;
  font-size: 1em;
`;
const ImageHeader = styled.img`
  display: block;
  width: inherit;
  height: 7em;
  border-radius: 50%;
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
  const [state, setState] = useState({
    asoEbi: false,
    fila: false,
  });

  const [selection, setSelection] = useState({
    styles: {
      agbada: false,
      bubaAndSokoto: false,
      dansiki: false,
    },
    caps: {
      abetiAja: false,
      awolowo: false,
      gobi: false,
    },
  });

  const changeState = (e, id) => {
    const name = e.currentTarget.getAttribute("name");
    setSelection((prevState) => {
      let state = {};
      if (id === "caps") {
        state = {
          ...prevState,
          caps: {
            abetiAja: false,
            awolowo: false,
            gobi: false,
            [name]: true,
          },
        };
      } else if (id === "styles") {
        state = {
          ...prevState,
          styles: {
            agbada: false,
            bubaAndSokoto: false,
            dansiki: false,
            [name]: true,
          },
        };
      } else {
        state = { ...prevState };
      }
      return state;
    });
  };

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
    document.getElementsByClassName("anchor")[0].classList.add("focus");
  }, []);

  let history = useHistory();

  function handleClick() {
    if (checkFabricSelection() && checkSelection()) {
      document.getElementById("submit-button").disabled = false;
      history.push("/upload");
    } else {
      document.getElementById("submit-button").disabled = true;
    }
  }

  const updateUISideBar = (event) => {
    // Update UI as user navigates on the side bar
    const arrayList = Array.from(document.getElementsByClassName("anchor"));
    arrayList.forEach((item) => {
      if (item.classList.contains("focus")) {
        item.classList.remove("focus");
      }
    });
    event.target.classList.add("focus");
  };

  const selectFabric = (e) => {
    // Store state data based on user selection
    const name = e.currentTarget.getAttribute("name");
    setState((prevState) => {
      let currentState = { ...prevState, [name]: !prevState[name] };
      return currentState;
    });
  };

  const checkFabricSelection = () => {
    const stateValues = Object.values(state);
    const isTrue = (value) => {
      if (value === true) {
        return true;
      } else {
        return false;
      }
    };
    return stateValues.some(isTrue);
  };

  const checkSelection = () => {
    const styleValues = Object.values(selection.styles);
    const capValues = Object.values(selection.caps);
    const isTrue = (value) => {
      if (value === true) {
        return true;
      } else {
        return false;
      }
    };
    return styleValues.some(isTrue) && capValues.some(isTrue);
  };

  return (
    <Container>
      <Nav />
      {width >= 1024 ? (
        <Container className="header-wrapper">
          <Container className="header">
            <Container className="header-left">
              <Heading>Henry & Dayo’s Wedding Ceremony</Heading>
              <Paragraph>
                Thank you very much for accepting and wanting to celebrate our
                wedding day with us and making it very special. We look forward
                to hosting you and gracing us with your presence.
                #HappilyEverAyansola
              </Paragraph>
              <Container className="date"> Date: September 23, 2021 </Container>
            </Container>
            <Container className="header-right">
              <ImageHeader src={couples} alt="couples" />
            </Container>
          </Container>
        </Container>
      ) : (
        <></>
      )}
      <Container className="main">
        <Container className="left">
          <List id="list">
            {list.map((listItems, index) => {
              return (
                <ListItems
                  onClick={(event) => updateUISideBar(event)}
                  href="#fabric_wrapper"
                  key={index}
                  className="list-item"
                >
                  <Anchor className="anchor" href={`#${listItems.link}`}>
                    {listItems.title}
                  </Anchor>
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
                    <React.Fragment key={index}>
                      <Container
                        className="image_fabric_inner"
                        onClick={(e) => selectFabric(e)}
                        name={image.name}
                      >
                        <Image src={image.path} loading="eager" />
                        <Container
                          className="blue-tick-container"
                          style={{
                            display: state[image.name] ? "flex" : "none",
                          }}
                        >
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
                        <Text style={{ fontWeight: "500" }}>{image.text}</Text>
                      </Container>
                    </React.Fragment>
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
                  click={changeState}
                  id_primary="styles_primary"
                  id_secondary="styles_secondary"
                />
              </Container>
              <Container>
                <Text>SELECT CAP STYLE</Text>
                <DisplayStyle
                  array={capStyleData}
                  id="caps"
                  click={changeState}
                  id_primary="caps_primary"
                  id_secondary="caps_secondary"
                />
              </Container>
            </Container>
          </Container>
          <Container>
            <Footer text="NEXT" click={handleClick} />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Store;
