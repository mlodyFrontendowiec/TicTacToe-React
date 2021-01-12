import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import Popup from "./Popup";

const GameBoard = () => {
  const [table, setTable] = useState(Array(9).fill(""));
  const [char, setChar] = useState("O");
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const changeChar = () => {
    if (char === "O") setChar("X");
    else setChar("O");
  };
  useEffect(() => {
    const winner = checkWin();
    setWinner(winner);
    if (!table.includes("")) {
      setDraw(true);
    }
  }, [char]);

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
  const newGame = () => {
    setTable(Array(9).fill(""));
    setChar("O");
    setWinner(null);
    setDraw(false);
  };
  const layout = !(winner || draw) && createTable();
  const popup = (winner || draw) && (
    <Popup draw={draw} winner={winner} click={newGame} />
  );

  return (
    <div className="container">
      {popup}
      {layout}
    </div>
  );
};

export default GameBoard;
