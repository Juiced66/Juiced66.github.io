import React from "react";

export default function Experience(props) {
  return (
    <><div style={{padding : "5px"}}>
      <h3>{props.poste}</h3>
      <p>{props.entreprise}</p>
      <p>{props.date}</p>
      <ul>
        {props.description.map((desc) => {
          return <li key={desc}>{desc}</li>;
        })}
      </ul>
      </div>
      <div className="photo-frame-entreprise">
        <img className="photo-entreprise" src={props.image} alt={props.entreprise} />{" "}
      </div>
    </>
  );
}
