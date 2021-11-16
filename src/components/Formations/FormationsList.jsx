import React from "react";
import Formation from "./Formation";
import NavItems from "../nav/NavItems";
import idem from "../../img/idem.png"
import cciNimes from "../../img/cciNimes.png"
import dhuoda from "../../img/dhuoda.png"
import cfaCci from "../../img/cfaCci.png"
import {faAngleDoubleRight, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

export default function FormationsList({mobile}) {
  const formations = [
    {
      diplome: "Titre niveau 5 : Developpeur Web et Mobile",
      date: "2021",
      ecole: "IDEM (Le soler)",
      detail: "Stage de fin de formation de deux mois et demi.",
      image: idem
    },
    {
      diplome: "BTS IRIS",
      date: "2012",
      ecole: "Lycée privé de la CCI (Nîmes)",
      detail: "Informatique et reseau, C/C++/SQL, non abouti.",
      image: cciNimes
    },
    {
      diplome: "Bac STI électronique",
      date: "2010",
      ecole: "Dhuoda (Nîmes)",
      detail: "Mention assez bien.",
      image : dhuoda
    },
    {
      diplome: "CAP Cuisine",
      date: "2014",
      ecole: "CFA de la CCI (Marguerittes)",
      detail: "Pour les coups de feu en cuisine ou au barbecue.",
      image : cfaCci
    },
  ];
  const [value, setValue] = useState(0);

  const { diplome, date, ecole, detail, image } = formations[value];
  if(!mobile){
    return (
    <>
      <div className="subMenu">
        {formations.map((form, index) => {
          return (
            <NavItems
              key={`navItem-${index}`}
              value={form.diplome}
              clickHandler={() => setValue(index)}
            />
          );
        })}
      </div>
      <div className="pannel-data card">
      <div className="column space-around">
        <Formation
          diplome={diplome}
          date={date}
          ecole={ecole}
          detail={detail}
          image={image}
        />
      </div></div>
    </>)
  }
  return (
    <div className="card pannel-data">
      <div className="center flex">
        <div
          onClick={() => {
            value > 0 ? setValue(value - 1) : setValue(formations.length - 1);
          }}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </div>
        <div
          onClick={() => {
            value < formations.length - 1 ? setValue(value + 1) : setValue(0);
          }}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </div>
      </div>
      <div className="space-around column">
      <Formation
        key={"form"}
        diplome={diplome}
        date={date}
        ecole={ecole}
        detail={detail}
        image={image}
      />
      </div>
    </div>
  );
}
