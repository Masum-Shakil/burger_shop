import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import chef from "../../static/chef.jpg";
import { Send as SendIcon } from "@mui/icons-material";

const Rightbar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" align="center" mt={5}>
        Hey I am shakira
      </Typography>
      <CardMedia
        component={"img"}
        height="300"
        image={chef}
        alt="burger_image"
        sx={{
          width: "400px",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            boxSizing: "border-box",
            zIndex: 1,
            transition: `all 0.45s ease`,
          },
        }}
      />
      <Typography align="left" variant="body1">
        I love to sing and cook! My best time spent around the table
      </Typography>
      <Typography align="left" variant="body1">
        Don't forget to subscribe codingstrade! <br /> <a href="#">Read More</a>
      </Typography>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      </Card>
      <Typography align="center" color="white" bgcolor="tomato">
        Subscribe via Email
      </Typography>
      <Box sx={{ pl: 10 }}>
        <TextField label="Your Email Here" variant="standard" color="warning" />
        <IconButton>
            <SendIcon sx={{color:'tomato'}} />
        </IconButton>
      </Box>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      </Card>
    </Box>
  );
};

export default Rightbar;
