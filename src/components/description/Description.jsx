import React from "react";
import "./Description.scss";

import Image1 from "../../img/Woolacombe-Bay-Architecture-by-INKSPACE-Feature-2.jpg";
import Image2 from "../../img/Coach-House-Architecture-by-INKSPACE-11-of-1.jpg";
import { Container, Grid, Typography } from "@mui/material";
const Description = () => {
  return (
    <Grid container spacing={2} className="description">
      <Grid item xs={12}>
        <p className="description__text">
          Located on the South Coast, we are a chartered practice with the Royal
          Institute of British Architects (RIBA). We specialise in the design
          and construction of contemporary and traditional homes, barn
          conversions, extensions and the renovation of listed buildings.
        </p>
      </Grid>
      <Grid container className="description__photos">
        <Grid item md={6} sm={12} xs={12} className="description__photos__left">
          <img src={Image1} alt={""} />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          className="description__photos__right"
        >
          <img src={Image2} alt={""} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Description;
