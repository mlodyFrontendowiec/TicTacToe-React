import React, { useState } from "react";
import GameBoard from "./GameBoard";

const initialTable = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const App = () => {
  const [table, setTable] = useState(initialTable);

  return (
    <>
      <GameBoard />
    </>
  );
};

export default App;
