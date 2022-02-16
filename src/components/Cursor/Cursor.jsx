import React, { useState } from "react";

import "./Cursor.styles.scss";

const Cursor = (props) => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  return (
    <div
      className={props.className}
      style={{
        left: cursorX + "px",
        top: cursorY + "px",
      }}
    />
  );
};
export default Cursor;
