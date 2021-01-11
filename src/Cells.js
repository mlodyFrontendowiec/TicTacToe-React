import React from "react";

import { ROWS, COLS, CELL } from "./const";

const Cells = () => {
  const cells = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      cells.push(<div className="cell"></div>);
    }
  }

  return (
    <div style={{ width: COLS * CELL, height: ROWS * CELL }} className="board">
      {cells}
    </div>
  );
};

export default Cells;
