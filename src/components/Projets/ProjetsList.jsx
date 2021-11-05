import React from "react";
import Projet from "./Projet";
import previewChat from "../../img/previewChat.jpg"
import previewCube from "../../img/previewCube.jpg"

export default function ProjetsList() {
  const projets = [
    {
      titre: "Interface de Chat connectée a Zendesk",
      repo: "https://github.com/Juiced66/julien-chat",
      stack: "React, Redux, ExpressJS, mongoose, css",
      details: [
        "Ce chat a été réalisé dans le cadre de mon projet pour le diplome de développeur",
        "J'ai créé tous les composants (messages, zone de chat, ...)",
        "J'ai d'abord implémenté le plus de fonctionnalités du SDK Zendesk que je pouvais (compte d'essai sur Zendesk)",
        "Ensuite j'ai essayé d'implémenter des fonctionnalitées plus secondaire (utilisation de oembed pour youtube,...)",
        "Le projet demandant un peu de Back, j'ai fait une Authentification avec un base mongoDB et Express.js"
      ],
      preview : previewChat
    },
    {
      titre: "Cube vs Cube",
      repo: "https://github.com/Juiced66/towerDefense",
      stack: "JS, HTML Canvas",
      details: [
        "Réalisation des bases d'un clone de plant vs zombie a l'aide d'un tutoriel",
        "J'ai apporté quelques fonctionnalités supplémentaires"
      ],
      preview : previewCube
    }, 
  ];
  return (
    <div>
      {projets.map((projet) => {
        return (
          <Projet
            titre={projet.titre}
            repo={projet.repo}
            details={projet.details}
            stack={projet.stack}
            preview={projet.preview}
          />
        );
      })}
    </div>
  );
}
