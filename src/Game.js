import React, { useState, useEffect } from "react";

import Cells from "./Cells";
import { START, BODY, FOOD, KEYS, COLS, ROWS } from "./const";

import "./style.css";

const Game = () => {
  const [snake, setSnake] = useState(null);
  const [board, setBoard] = useState(null);
  const [direction, setDirection] = useState(null);
  const [gameover, setGameover] = useState(false);

  useEffect(() => {
    start();
  }, []);
  const start = () => {
    const board = [];

    board[START] = BODY;

    const snake = [START];

    setSnake(snake);
    setBoard(board);
    setDirection(KEYS.right);
  };
  const frame = () => {
    const head = getNextIndex(snake[0], direction);
  };
  useEffect(() => {
    console.log(frame());
  }, [snake, board, direction]);

  const getNextIndex = (head, direction) => {
    let x = head % COLS;
    let y = Math.floor(head / COLS);

    switch (direction) {
      case KEYS.up:
        y = y <= 0 ? COLS - 1 : y - 1;
        break;
      case KEYS.down:
        y = y >= COLS ? 0 : y + 1;
        break;
      case KEYS.left:
        x = x <= 0 ? COLS - 1 : x - 1;
        break;
      case KEYS.right:
        x = x >= COLS ? 0 : x + 1;
        break;
      default:
        return;
    }
    return COLS * y + x;
  };

  return <Cells />;
};

export default Game;
