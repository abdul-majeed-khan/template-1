import React from "react";

const Dots = () => {
  var rows = [];
  for (var i = 0; i < 50; i++) {
    rows.push(
      <div className={`dotWrapper dotWrapper-${i + 1}`} key={i}>
        <div className={`dot dot-${i + 1}`}></div>
      </div>
    );
  }
  return <>{rows}</>;
};

export default Dots;
