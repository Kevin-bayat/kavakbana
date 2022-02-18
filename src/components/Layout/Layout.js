import React from "react";
import Slider from "../Slider/Slider";
import Description from "../description/Description";
import OurWork from "../our-work/our-work";
import Home from "../../pages/Home/Home";

const Layout = () => {
  return (
    <div>
      <Home>
        <Slider />
        <Description />
        <OurWork />
      </Home>
    </div>
  );
};
export default Layout;
