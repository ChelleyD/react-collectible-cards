import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHead from "./CardHead";
import CardSpecs from "./CardSpecs";
import ZaunCrest from "../images/ZaunCrest.png";
import PiltoverCrest from "../images/PiltoverCrest.png";
import Vi from "../images/Vi.jpeg";
import Jayce from "../images/Jayce.jpeg";
import Jinx from "../images/Jinx.jpeg";
import Mel from "../images/Mel.jpeg";
import Silco from "../images/Silco.png";
import Caitlyn from "../images/Caitlyn.JPG";
import Ekko from "../images/Ekko.JPG";
import Heimerdinger from "../images/Heimerdinger.JPG";
import Singed from "../images/Singed.JPG";
import Vander from "../images/Vander.JPG";
import Viktor from "../images/Viktor.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

function CardBody() {
  const char_info = [
    {
      name: "Vi",
      avatar: ZaunCrest,
      image: Vi,
      alt: "Violet from Arcane",
      species: "Human",
      year_of_origin: "970 AN - 973 AN",
      abilities: ["Brawler", "Leader", "Detective"],
    },
    {
      name: "Jinx (Powder)",
      avatar: ZaunCrest,
      image: Jinx,
      alt: "Jinx from Arcane",
      species: "Chemically Altered Human",
      year_of_origin: "975 AN",
      abilities: ["Inventor"],
    },
    {
      name: "Silco",
      avatar: ZaunCrest,
      image: Silco,
      alt: "Silco from Arcane",
      species: "Chemically Altered Human",
      year_of_origin: "956 AN - 961 AN",
      abilities: ["Leader", "Teacher"],
    },
    {
      name: "Jayce Talis",
      avatar: PiltoverCrest,
      image: Jayce,
      alt: "Jayce from Arcane",
      species: "Human",
      year_of_origin: "963 AN - 966 AN",
      abilities: ["Diplomacy", "Inventor"],
    },
    {
      name: "Mel Medarda",
      avatar: PiltoverCrest,
      image: Mel,
      alt: "Mel from Arcane",
      species: "Human",
      year_of_origin: "963 AN - 966 AN",
      abilities: ["Diplomacy", "Painting"],
    },
    {
      name: "Caitlyn",
      avatar: PiltoverCrest,
      image: Caitlyn,
      alt: "Caitlyn from Arcane",
      species: "Human",
      year_of_origin: "970 AN - 973 AN",
      abilities: ["Detective"],
    },
    {
      name: "Ekko",
      avatar: ZaunCrest,
      image: Ekko,
      alt: "Ekko from Arcane",
      species: "Human",
      year_of_origin: "979 AN",
      abilities: ["Brawler"],
    },
    {
      name: "Heimerdinger",
      avatar: PiltoverCrest,
      image: Heimerdinger,
      alt: "Heimerdinger from Arcane",
      species: "Yordle",
      year_of_origin: "Earlier than 680 AN",
      abilities: ["Diplomacy", "Teacher"],
    },
    {
      name: "Singed",
      avatar: ZaunCrest,
      image: Singed,
      alt: "Singed from Arcane",
      species: "Chemically Altered Human",
      year_of_origin: "876 AN - 916 AN",
      abilities: ["Inventor"],
    },
    {
      name: "Vander",
      avatar: ZaunCrest,
      image: Vander,
      alt: "Vander from Arcane",
      species: "Human",
      year_of_origin: "951 AN - 956 AN",
      abilities: ["Brawler", "Barkeep", "Leader"],
    },
    {
      name: "Viktor",
      avatar: ZaunCrest,
      image: Viktor,
      alt: "Viktor from Arcane",
      species: "Human Cyborg",
      year_of_origin: "961 AN - 968 AN",
      abilities: ["Inventor"],
    },
  ];

  const sorted = char_info.sort((a, b) => {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });

  return (
    <Swiper effect={"cards"} grabCursor={true} className="mySwiper" cardsEffect={{slideShadows:false, shadow: false}}>
      {sorted.map((info) => {
        return (
          <SwiperSlide>
            <Card
              className="cardBody"
              sx={{
                width: 600,
                border: 10,
                borderColor: "#CEC7C0",
                backgroundColor:"#799496"
              }}
            >
              <CardHead name={info.name} avatar={info.avatar} />

              <CardMedia
                component="img"
                height="450"
                image={info.image}
                alt={info.alt}
                className="charImg"
              />

              <CardSpecs
                species={info.species}
                year_of_origin={info.year_of_origin}
                abilities={info.abilities}
              />
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default CardBody;
