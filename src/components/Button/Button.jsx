import React from "react";
import "./Button.styles.scss";

const Button = ({ children, ...props }) => (
  <button className={"button"}>{children}</button>
);
export default Button;
