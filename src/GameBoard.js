import React, { useState } from "react";
import Cell from "./Cell";

const initialTable = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const GameBoard = () => {
  const [table, setTable] = useState(initialTable);

  const createTable = () => {
    const cell = [];
    let index = 0;
    for (let x = 0; x < table.length; x++) {
      for (let y = 0; y < table.length; y++) {
        cell.push(<Cell key={index++} x={x} y={y} />);
      }
    }
    return cell;
  };
  const cells = createTable();

  return <div className="container">{cells}</div>;
};

export default GameBoard;
