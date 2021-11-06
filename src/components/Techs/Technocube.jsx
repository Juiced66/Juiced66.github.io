import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const Technocube = () => {
  return (
    <div>
      <div className="container-cube ">
        <div className="cube">
          <div className="face front">
            <div className="flex-container">
            <FontAwesomeIcon icon={faHtml5}/>
              <span>HTML5</span>
            </div>
          </div>

          <div className="face left">
            <div className="flex-container">
            <FontAwesomeIcon icon={faReact}/>
              <span>React</span>
            </div>
          </div>

          <div className="face right">
            <div className="flex-container">
            <FontAwesomeIcon icon={faCss3}/>
              <span>CSS</span>
            </div>
          </div>

          <div className="face back">
            <div className="flex-container">
            <FontAwesomeIcon icon={faAngular}/>
              <span>ANGULAR</span>
            </div>
          </div>

          <div className="face top">
            <div className="flex-container">
            <FontAwesomeIcon icon={faPhp}/>
              <span>PHP</span>
            </div>
          </div>
          <div className="face bottom">
            <div className="flex-container">
            <FontAwesomeIcon icon={faJs}/>
              <span>JS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technocube;
