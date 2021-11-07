import React from "react";

export default function Projet(props) {
  return (
    <div>
      <a href={props.repo}>
        <h3>{props.titre}</h3>
      </a>
      <p>{props.stack}</p>

      <ul>
        {props.details.map((detail, index) => {
          return <li key={"detail-" + detail.titre + index}>{detail}</li>;
        })}
      </ul>

      <div className="photo-frame">
        <img src={props.preview} alt="preview projet" />
      </div>
    </div>
  );
}
