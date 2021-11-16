import React from "react";
import Experience from "./Experience";
import NavItems from "../nav/NavItems";
import meetdeal from "../../img/meetdeal.png";
import haxeDirect from "../../img/haxeDirect.png";
import pyrescom from "../../img/pyrescom.png";
import resto from "../../img/resto.jpg";
import {faAngleDoubleRight, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { useState } from "react";

export default function ExperiencesList({mobile}) {
  const experiences = [
    {
      poste: "Developpeur Frontend",
      date: "Septembre - Novembre 2021",
      entreprise: "MeetDeal (Rivesaltes)",
      description: [
        "Stage de fin de formation de deux mois et demi",
        "Projet : ChatBot arborescent à l'aide d'une API (React)",
        "Travaux supplémentaires : MaJ du style d'un site web existant (Responsive, Mobile First)",
      ],
      image: meetdeal,
    },
    {
      poste: "Technicien Electronique Itinérant (France)",
      date: "Octobre 2019 - Octobre 2020",
      entreprise: "Pyrescom (Canohès)",
      description: [
        "Programation, installation",
        "Maintenance à distance/sur site",
      ],
      image: pyrescom,
    },

    {
      poste: "Technicien Caisse enregistreuse et sécurité (Occitanie)",
      date: "Novembre 2017 - Octobre 2019",
      entreprise: "Haxe-Direct (Montpellier)",
      description: [
        "Programmation de caisses et de périphériques",
        "Installation dans les commerces, maintenance",
        "Paramétrage et installation de systèmes de sécurité (Alarme, vidéo)",
      ],
      image: haxeDirect,
    },
    {
      poste: "Service, cuisine, management",
      date: "2009 - 2017",
      entreprise: "De nombreux restaurants",
      description: [
        "Mon père était restaurateur et j'ai eu envie de reprendre son restaurant",
        "Pour y arriver, j'ai parcouru la France et travaillé a tout types de postes",
        "J'ai arrêté quand mon père a décidé de vendre son restaurant !",
      ],
      image: resto,
    },
  ];

  const [value, setValue] = useState(0);

  const { poste, date, entreprise, description, image } = experiences[value];

  return mobile ? (
    <>
      <div className="subMenu hidden-mobile">
        {experiences.map((exp, index) => {
          return (
            <NavItems
              key={`navItem-${index}`}
              value={exp.entreprise}
              clickHandler={() => setValue(index)}
            />
          );
        })}
      </div>
      <div className="pannel-data card">
        <div className="center flex">
          <div
            onClick={() => {
              if (value > 0) setValue(value - 1);
            }}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </div>
          <div
            onClick={() => {
              value < experiences.length - 1
                ? setValue(value + 1)
                : setValue(0);
            }}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </div>
        </div>
        
        <div className="column space-around">
          <Experience
            poste={poste}
            date={date}
            entreprise={entreprise}
            description={description}
            image={image}
          />
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="subMenu">
        {experiences.map((exp, index) => {
          return (
            <NavItems
              key={`navItem-${index}`}
              value={exp.entreprise}
              clickHandler={() => setValue(index)}
            />
          );
        })}
      </div>
      <div className="pannel-data card">
      <div className="column space-around">
        <Experience
          poste={poste}
          date={date}
          entreprise={entreprise}
          description={description}
          image={image}
        />
      </div></div>
    </>
  );
}
