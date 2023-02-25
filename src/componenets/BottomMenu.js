import React from "react";

const BottomMenu = ({ clickTrue, clickFalse }) => {
  return (
    <div className="bottom-menu">
      <button onClick={clickTrue} className="btn">
        True
      </button>
      <button onClick={clickFalse} className="btn">
        False
      </button>
    </div>
  );
};

export default BottomMenu;
