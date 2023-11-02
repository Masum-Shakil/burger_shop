import React from "react";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import PostsCard from "./PostsCard";

const Posts = () => {
  return (
    <Box>
      <Typography variant="h4" align="center">
        Latest Recipies
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        <Grid item xs>
          <PostsCard myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <PostsCard myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <PostsCard myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <PostsCard myDirection={"flex"} />
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        align="center"
        color="white"
        bgcolor={"black"}
        mt={4}
        mb={4}
      >
        Most Popular
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={"row"}>
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
      </Grid>
      <Stack
        spacing={2}
        mt={3}
        mb={3}
        justifyContent="cener"
        alignItems="center"
      >
        <Pagination count={10} color={'warning'}/>
      </Stack>
    </Box>
  );
};

export default Posts;
