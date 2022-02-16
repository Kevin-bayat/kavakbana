import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.styles.scss";
import image from "../src/img/Branksome-Park-Architecture-by-INKSPACE-Feature.jpg";
import image1 from "../src/img/Branksome-Park-Architecture-by-INKSPACE-Feature-2.jpg";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Description from "./components/description/Description";
import OurWork from "./components/our-work/our-work";

function App() {
  return (
    <div className="App">
      <Navbar className={"movable active"} />
      <section className="section">
        <Text />
        <img src={image} alt={""} className="image" />

        <div className="desc">
          <h1 className="title">This is first image</h1>
          <p>this is for KAVAK </p>
          <Button className="button"> More Info </Button>
        </div>
      </section>
      <section className="section-description">
        <Description />
        <OurWork />
      </section>
    </div>
  );
}

export default App;
