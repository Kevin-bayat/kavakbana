import React from "react";

import "./our-work.scss";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { kavakData } from "../../data";

const OurWork = () => {
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
        <Container maxWidth={"lg"}>
          <Paper elevation={6} className={"paper"}>
            <Grid container spacing={2}>
              {kavakData.map((item) => (
                <Grid item md={3} xs={6} className={"boxContainer"}>
                  <Box key={item?.id} className={"our-work__box"}>
                    <Box paddingRight={0} className={"image"}>
                      <img
                        src={item.image}
                        alt={item.name}
                        width={"100%"}
                        height={230}
                      />
                    </Box>

                    <Box className={"titleContainer"}>
                      <Typography variant={"h5"} component={"div"} paddingY={1}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="description">
                    <Typography variant={"h5"} component={"div"} paddingY={1}>
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </div>
    </div>
  );
};
export default OurWork;
