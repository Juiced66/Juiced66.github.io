import React from "react";

export default function Header({ clickHandler, open, mobile }) {
  if (!mobile) {
    return (
      <header>
        <div></div>
        <div className="header">
          <h1>Developpeur Web junior</h1>
          <div className="h1">Julien Decosse</div>
        </div>
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
