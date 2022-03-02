import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.styles.scss";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Layout />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
