import React, { useState, useEffect } from "react";
import Cell from "./Cell";

const GameBoard = () => {
  const [table, setTable] = useState(Array(9).fill(""));
  const [char, setChar] = useState("O");
  const [winner, setWinner] = useState(null);

  const changeChar = () => {
    if (char === "O") setChar("X");
    else setChar("O");
  };
  useEffect(() => {
    const winner = checkWin();
    setWinner(winner);
    console.log(winner);
  }, [table]);

  const handleClick = (id) => {
    const newTable = table.map((item, index) => {
      if (index === id && item === "") {
        changeChar();
        return (item = char);
      } else {
        return item;
      }
    });

    setTable(newTable);
  };
  const checkWin = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (table[a] && table[a] === table[b] && table[a] === table[c]) {
        return table[a];
      }
    }
    return null;
  };

  const createTable = () => {
    const tableLayout = table.map((cell, index) => (
      <Cell id={index} value={cell} click={handleClick} />
    ));
    return tableLayout;
  };
  const layout = !winner && createTable();
  const popup = winner && <div>Wygrał {winner}</div>;

  return (
    <div className="container">
      {layout}
      {popup}
    </div>
  );
};

export default GameBoard;
