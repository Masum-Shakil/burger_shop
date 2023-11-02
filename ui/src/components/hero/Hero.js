import { Container, Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import burger from "../../static/burger1.jpg";
import meat from "../../static/meat.jpg";
import drinks from "../../static/drinks.jpg";
import appetizer from "../../static/appetizer.jpg";

const Hero = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("md")]: {
      height: 200,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));

  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "white",
    background: "tomato",
    fontSize: 20,
  });

  const StylesWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      paddingTop: "140%",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "40%",
    },
    width: "80%",
  }));
  return (
    <Container>
      <Grid container direction={"row"} columnSpacing={2}>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${meat})` }}>
            <StylesWrapper>
              <StyledTypography>Meat</StyledTypography>
            </StylesWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${drinks})` }}>
            <StylesWrapper>
              <StyledTypography>Drinks</StyledTypography>
            </StylesWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
            <StylesWrapper>
              <StyledTypography>Burger</StyledTypography>
            </StylesWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${appetizer})` }}>
            <StylesWrapper>
              <StyledTypography>Appetizer</StyledTypography>
            </StylesWrapper>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
