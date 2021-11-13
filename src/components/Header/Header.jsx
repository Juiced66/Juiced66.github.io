import React from "react";
import Nav from "../nav/Nav";

export default function Header({ clickHandler, open, mobile,pannels,setValue }) {
  if (!mobile) {
    return (
      <header>
        <div></div>
        <div className="header">
          <h1>Developpeur Web junior</h1>
          <div className="h1">Julien Decosse</div>
        </div>
        <Nav pannels={pannels} handleClick={setValue}/>
      </header>
    );
  }
  return (
    <header>
      {open ? (
        <div className="menu-btn-container" onClick={clickHandler}>
          <div>✖️</div>
        </div>
      ) : (
        <div className="menu-btn-container" onClick={clickHandler}>
          <div className="barre"></div>
          <div className="barre"></div>
          <div className="barre"></div>
        </div>
      )}

      <div className="header">
        <h1>Developpeur Web junior</h1>
        <div className="h1">Julien Decosse</div>
      </div>
    </header>
  );
}
