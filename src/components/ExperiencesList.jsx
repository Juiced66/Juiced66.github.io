import React from "react";
import Experience from "./Experience";

export default function ExperiencesList() {
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
    },
    {
      poste: "Technicien Electronique Itinérant (France)",
      date: "Octobre 2019 - Octobre 2020",
      entreprise: "Pyrescom (Canohès)",
      description: [
        "Programation, installation",
        "Maintenance à distance/sur site",
      ],
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
    },
  ];
  return (
    <div>
      {experiences.map((experience) => {
        return (
          <Experience
            poste={experience.poste}
            date={experience.date}
            entreprise={experience.entreprise}
            description={experience.description}
          />
        );
      })}
    </div>
  );
}
