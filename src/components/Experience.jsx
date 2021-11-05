import React from "react";

export default function Experience(props) {
  return (
    <div>
      <h3>{props.poste}</h3>
      <p>{props.entreprise}</p>
      <p>{props.date}</p>
      <p>
        <ul>
          {props.description.map((desc) => {
            return <li key={desc}>{desc}</li>;
          })}
        </ul>
      </p>
    </div>
  );
}
