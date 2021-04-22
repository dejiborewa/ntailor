// Dependencies
import React, { useEffect, useState } from "react";
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

const Container = styled.div`
  color: var(--color-text-secondary);

  &.image_fabric {
    display: flex;
    justify-content: space-between;
    gap: .7em;
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
`;

const Image = styled.img`
  width: 100%;
  height: 9em;
  border-radius: 10px;

  &.active-fabric {
    opacity: 0.5;
  }
`;

const Store = () => {
  const [fabricSelection, setFabricSelection] = useState(false);

  useEffect(() => {
    const fabric_images = document.getElementById("fabric");
    fabric_images.addEventListener("click", (event) => {
      if (fabricSelection === true) {
        event.target.classList.add("active-fabric");
      } else {
        event.target.classList.remove("active-fabric");
      }
    });
    return () => {
      fabric_images.removeEventListener("click", (event) => {
        if (fabricSelection === true) {
          event.target.classList.add("active-fabric");
        } else {
          event.target.classList.remove("active-fabric");
        }
      });
    };
  });

  return (
    <Container>
      <Nav />
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
                    <Image src={image} />
                  </Container>
                );
              })}
            </>
          </Container>
        </Container>
        <Container>
          <Text>CHOOSE A STYLE</Text>
          <DisplayStyle array={styleData} />
        </Container>
        <Container>
          <Text>SELECT CAP STYLE</Text>
          <DisplayStyle array={capStyleData} />
        </Container>
      </Container>
      <Footer text="NEXT" />
    </Container>
  );
};

export default Store;
