import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Content = ({children}) => {
    return ( 
        <Grid xs={12} sm={12} md={9} lg={9} xl={10} className="text-center">
            {children}
        </Grid>
     );
}
 
export default Content;