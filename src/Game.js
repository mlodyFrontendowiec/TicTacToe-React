import React, { useState, useEffect } from "react";

import Cells from "./Cells";
import { START, BODY, FOOD, KEYS } from "./const";

import "./style.css";

const Game = () => {
  const [board, setBoard] = useState(null);
  const [snake, setSnake] = useState(null);
  const [direction, setDirection] = useState(null);
  const [gameover, setGameover] = useState(false);

  useEffect(() => {
    start();
  }, []);
  const start = () => {
    const board = [];

    board[START] = BODY;

    const snake = [START];

    setSnake([snake]);
    setBoard([board]);
    setDirection(KEYS.right);
  };

  return <Cells />;
};

export default Game;
