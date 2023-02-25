import React from "react";

const TopMenu = ({ correct, incorrect }) => {
  return (
    <div className="top-menu">
      <p>Correct:{correct}</p>
      <p>Incorrect:{incorrect}</p>
    </div>
  );
};

export default TopMenu;
