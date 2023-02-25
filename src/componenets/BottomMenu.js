import React from "react";

const BottomMenu = ({ clickTrue, clickFalse }) => {
  return (
    <div>
      <button onClick={clickTrue}>True</button>
      <button onClick={clickFalse}>False</button>
    </div>
  );
};

export default BottomMenu;
