import React, { useEffect, useState } from "react";
import "./Text.styles.scss";

const Text = () => {
  const [color, setColor] = useState("");

  const handleScroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 413) {
      if (!color) {
        setColor("red");
      }
    } else {
      if (color) {
        setColor("");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="text" style={{ color: color }}>
      <div className="text--left">
        <h3>Architecture</h3>
      </div>
      <div className="text--right">
        <h3>Interior Design</h3>
      </div>
    </div>
  );
};
export default Text;
