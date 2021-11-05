import React from "react";
import Formation from "./Formation";

export default function FormationsList() {
  const formations = [
    {
      diplome: "Titre niveau 5 : Developpeur Web et Mobile",
      date: "2021",
      ecole: "IDEM (Le soler)",
      detail: "Stage de fin de formation de deux mois et demi.",
    },
    {
        diplome: "BTS IRIS",
        date: "2012",
        ecole: "Lycée privé de la CCI (Nîmes)",
        detail: "Informatique et reseau, C/C++/SQL, non abouti.",
      },
    {
        diplome: "Bac STI électronique",
        date: "2010",
        ecole: "Dhuoda (Nîmes)",
        detail: "Mention assez bien.",
      },
    {
        diplome: "CAP Cuisine",
        date: "2014",
        ecole: "CFA de la CCI (Marguerittes)",
        detail: "Pour les coups de feu en cuisine ou au barbecue.",
      },
  ];
  return (
    <div>
      {formations.map((formation) => {
        return (
          <Formation
            diplome={formation.diplome}
            date={formation.date}
            ecole={formation.ecole}
            detail={formation.detail}
          />
        );
      })}
    </div>
  );
}
