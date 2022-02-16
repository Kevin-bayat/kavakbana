import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.styles.scss";
import Description from "./components/description/Description";
import OurWork from "./components/our-work/our-work";
import Loader from "./components/Loader/Loader";
import Slider from "./components/Slider/Slider";
import Home from "./pages/Home/Home";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home>
            <Slider />
            <Description />
            <OurWork />
          </Home>
        </>
      )}
    </div>
  );
}

export default App;
