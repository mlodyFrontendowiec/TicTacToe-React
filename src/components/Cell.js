import React, { useEffect, useState } from "react";

const Cell = ({ value, click, id }) => {
  return (
    <div className="cell" onClick={() => click(id)}>
      <p>{value}</p>
    </div>
  );
};

export default Cell;
