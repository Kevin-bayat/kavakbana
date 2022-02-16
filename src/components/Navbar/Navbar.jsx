import React, { useState } from "react";
import "./Navbar.styles.scss";
import "../Logo/Logo.styles.scss";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { animated, useTransition } from "react-spring";
// import Cursor from "../Cursor/Cursor";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [pageOffset, setPageOffset] = useState(0);
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  console.log({ isOpen });
  const navbarClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    // console.log(window.pageYOffset);
    setPageOffset(window.pageYOffset);
    if (window.pageYOffset > 700) {
      //   if (!color) {
      //     setColor("red");
      //   }
      // } else {
      //   if (color) {
      //     setColor("");
      //   }
      // }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div>
        <Logo isOpen={isOpen} />
      </div>
      {transition(
        (style, item) =>
          item && (
            <animated.div className="navbar" style={style}>
              <div />
              <div>
                <ul className="nav">
                  <li className="nav-items">
                    <a className={` nav-item`}>projects</a>
                  </li>
                  <li className="nav-items">
                    <a className={` nav-item`}>information</a>
                  </li>
                  <li className="nav-items">
                    <a className={` nav-item`}>news</a>
                  </li>

                  <li className="nav-items">
                    <a className={` nav-item`}>about us</a>
                  </li>
                  <li className="nav-items">
                    <a className={` nav-item`}>contacts</a>
                  </li>

                  {/*<Cursor className={"cursor"} />*/}
                </ul>
              </div>
              <div />
            </animated.div>
          )
      )}
      <div onClick={navbarClickHandler}>
        <BurgerMenu isOpen={isOpen} pageOffset={pageOffset} />
      </div>
    </>
  );
};
export default Navbar;
