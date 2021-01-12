import React from "react";
const Popup = ({ draw, winner, click }) => {
  return (
    <div className="winner">
      {!draw ? <p>The winner is {winner}</p> : <p>Draw</p>}
      <button className="winner__button" onClick={click}>
        New game
      </button>
    </div>
  );
};

export default Popup;
