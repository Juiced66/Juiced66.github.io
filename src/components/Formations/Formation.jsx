import React from "react";


export default function Formation(props) {
  return (
    <>
      <div style={{padding : "5px"}}>
        <h3>{props.diplome}</h3>
        <p>{props.ecole}</p>
        <p>{props.date}</p>
        <p>{props.detail}</p>
      </div>
     <img src={props.image} alt={props.ecole} /> 
    </>
  );
}
