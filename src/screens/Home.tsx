import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import UrlHandlerComponent from "./components/UrlHandlerComponent";
import DataComponent from "./components/DataComponent";

const Home = () => {
  return (
    <Box display={"flex"} height={"100%"} flexDirection={"column"} flex={1}>
      <Grid flex={1} container spacing={2}>
        <Grid xs={4}></Grid>
        <Grid display={"flex"} flexDirection={"column"} xs={8}>
          <UrlHandlerComponent />
          <DataComponent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
