import { useContext } from "react";
import { poroContext } from "../../context";


import { Avatar, Divider, Hidden, Typography, Tab, Tabs } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";


import hesam from "../../assests/photo_2022-05-06_19-48-41.jpg";

const SideBar = () => {

    const { handleChange, value } = useContext(poroContext)

    const tabIndex = (index) => {
        return {
            id: `panel_tab_${index}`,
            "aria-controls": `panel-${index}`,
        };
    };


    return (
        <>
            <Grid xs={0} sm={0} md={3} lg={3} xl={2} className=" bg-gray-800">
                <Box className="text-center">
                    <Hidden mdDown>
                        <Avatar
                            className="m-auto w-[200px] h-[200px] mt-4"
                            variant="rounded"
                            src={hesam}
                        />
                    </Hidden>
                    <Typography variant="h6" className="text-white mt-2">
                        حسام الدین موحد
                    </Typography>
                    <Typography variant="caption" className="text-white">
                        Front end developer
                    </Typography>
                    <Divider className="bg-white mt-3" variant="middle" />

                    <Tabs
                        orientation="vertical"
                        variant="fullWidth"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        className="text-white"
                        value={value}
                        onChange={handleChange}

                    >
                        <Tab label="صفحه اصلی" className="text-white" {...tabIndex(0)} />
                        <Tab label="درباره من" className="text-white" {...tabIndex(1)} />
                        <Tab label=" رزومه من " className="text-white" {...tabIndex(2)} />
                        <Tab label=" نمونه کارها" className="text-white" {...tabIndex(3)} />
                        <Tab
                            label=" نظرات کارفرما ها"
                            className="text-white"
                            {...tabIndex(4)}
                        />
                        <Tab label="ارتباط با من" className="text-white" {...tabIndex(5)} />
                    </Tabs>
                    <Divider className="bg-white mt-3" variant="middle" />
                </Box>
            </Grid>
        </>
    );
};

export default SideBar;
