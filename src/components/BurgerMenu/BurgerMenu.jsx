import React from "react";
import "./BurgerMenu.styles.scss";
import { Spiral as Hamburger } from "hamburger-react";

const BurgerMenu = ({ isOpen, ...props }) => {
  const colorProperty = isOpen ? "#000" : "#fff";
  console.log({ OFFSET: props.pageOffset, isOpen });
  return (
    <div className="burger-menu">
      <h2
        style={{
          color: isOpen
            ? "#fff"
            : !isOpen
            ? props.pageOffset > 670 && "#000"
            : "#fff",
        }}
      >
        Menu
      </h2>

      <Hamburger
        toggeled={isOpen}
        easing="ease-in"
        duration={0.3}
        color={!isOpen && props.pageOffset < 670 ? "#fff" : "#000"}
      />
    </div>
  );
};
export default BurgerMenu;
