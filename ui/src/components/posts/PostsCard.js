import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import burger from "../../static/burger.jpg";

const PostsCard = ({myDirection}) => {
  return (
    <>
      <Box mt={3}>
        <Link href="#" sx={{ textDecoration: "none" }}>
          <Card>
            <Box
              sx={{
                display: { ns: "block", md: `${myDirection}`, sm: `${myDirection}` },
                flexDirection: "row",
              }}
            >
              <CardMedia
                component={"img"}
                height="300"
                image={burger}
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
              <CardContent>
                <Typography gutterBottom variant="h4">
                  Yummy Burger
                </Typography>
                <Typography variant="h5" color="txt.secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </Typography>
                <CardActions>
                  <Button size="large" sx={{ color: "tomato" }}>
                    Share
                  </Button>
                  <Button size="large" sx={{ color: "tomato" }}>
                    Learn More
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
          </Card>
        </Link>
      </Box>
    </>
  );
};

export default PostsCard;
