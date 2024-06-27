import Grid from "@mui/material/Unstable_Grid2";

const MainLayout = ({ children }) => {
  return (
    <Grid container className="h-screen">
      {children}
    </Grid>
  );
};

export default MainLayout;
