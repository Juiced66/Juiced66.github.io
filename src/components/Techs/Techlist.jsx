import React from "react";
import Tech from "./Tech";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

export default function TechList() {
  const techs = [
    {
      value: "HTML5",
      icon: <FontAwesomeIcon icon={faHtml5} />,
    },
    {
      value: "React",
      icon: <FontAwesomeIcon icon={faReact} />,
    },
    {
      value: "CSS",
      icon: <FontAwesomeIcon icon={faCss3} />,
    },
    {
      value: "ANGULAR",
      icon: <FontAwesomeIcon icon={faAngular} />,
    },
    {
      value: "PHP",
      icon: <FontAwesomeIcon icon={faPhp} />,
    },
    {
      value: "JS",
      icon: <FontAwesomeIcon icon={faJs} />,
    },
  ];

  return (
    <div>
      {techs.map((tech, index) => {
        return <Tech value={tech.value} icon={tech.icon} key={index} />;
      })}
    </div>
  );
}
