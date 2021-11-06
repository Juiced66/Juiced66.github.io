import React from "react";

export default function Header(props) {
  return (
    <header>
      {props.open && props.mobile ? (
        <div className="menu-btn-container" onClick={props.clickHandler}>
          <div>✖️</div>
        </div>
      ) : props.mobile ? (
        <div className="menu-btn-container" onClick={props.clickHandler}>
          <div className="barre"></div>
          <div className="barre"></div>
          <div className="barre"></div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="header">
        <h1>Developpeur Web junior</h1>
        <div className="h1">Julien Decosse</div>
      </div>
    </header>
  );
}
