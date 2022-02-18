import React, { useEffect, useRef, useState } from "react";

import "./our-work.scss";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { kavakData } from "../../data/data";

const OurWork = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="our-work__container">
      <div className="our-work">
        <Typography
          variant={"h2"}
          component={"div"}
          className="our-work__title"
          paddingBottom={2}
        >
          Our Work
        </Typography>
        <motion.div
          ref={carousel}
          className={"carousel"}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            elevation={6}
            className="inner-carousel"
          >
            {kavakData.map((item) => (
              <motion.div paddingRight={0} className={"image"} key={item.id}>
                <img src={item.image} alt={item.name} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default OurWork;
