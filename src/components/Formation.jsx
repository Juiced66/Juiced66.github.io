import React from "react";

export default function Formation(props) {
  return (
    <div>
      <h3>{props.diplome}</h3>
      <p>{props.ecole}</p>
      <p>{props.date}</p>
      <p>{props.detail}</p> 
    </div>
  );
}
