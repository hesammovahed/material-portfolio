import Content from "../ui/Content";

import { Typography } from '@mui/material';
import TabPanel from "../sideBar/tabs/TabPanel";


import SwipeableViews from 'react-swipeable-views';
import { useContext } from "react";
import { poroContext } from "../../context";
import Home from "../pages/Home";
import About from "../pages/About";

const PagesContainer = () => {

    const { value, handleChange } = useContext(poroContext)

    return (
        <Content>
            <SwipeableViews
                index={value}
                onChangeIndex={handleChange}
            >
                <TabPanel index={0}>
                    <Home />
                </TabPanel>
                <TabPanel index={1}>
                    <About />

                </TabPanel>
                <TabPanel index={2}>
                    <Typography variant="h3">رزومه من </Typography>
                </TabPanel>
                <TabPanel index={3}>
                    <Typography variant="h3">نمونه کارها </Typography>
                </TabPanel>
                <TabPanel index={4}>
                    <Typography variant="h3">نظرات کارفرما ها </Typography>
                </TabPanel>
                <TabPanel index={5}>
                    <Typography variant="h3">ارتباط با من </Typography>
                </TabPanel>
            </SwipeableViews>
        </Content>
    );
}

export default PagesContainer;