import { useContext } from "react";
import { poroContext } from "../../context";


import { Divider, Typography, Tab, Tabs } from "@mui/material";

const DrawerMobile = ({ handleDrawer }) => {
    const { value, handleChange } = useContext(poroContext)

    const tabIndex = (index) => {
        return {
            id: `panel_tab_${index}`,
            "aria-controls": `panel-${index}`,
        };
    };

    return (
        <>
            <Typography variant="h6" className="text-white mt-2">
                حسام الدین موحد
            </Typography>
            <Typography variant="caption" className="text-white">
                Front end developer
            </Typography>
            <Divider className="bg-white mt-3" variant="middle" />
            <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                className="text-white"
                value={value}
                onChange={handleChange}
            >
                <Tab label="صفحه اصلی" className="text-white" {...tabIndex(0)} onClick={handleDrawer} />
                <Tab label="درباره من" className="text-white" {...tabIndex(1)} onClick={handleDrawer} />
                <Tab label=" رزومه من " className="text-white" {...tabIndex(2)} onClick={handleDrawer} />
                <Tab label=" نمونه کارها" className="text-white" {...tabIndex(3)} onClick={handleDrawer} />
                <Tab
                    label=" نظرات کارفرما ها"
                    className="text-white"
                    {...tabIndex(4)}
                    onClick={handleDrawer}
                />
                <Tab label="ارتباط با من" className="text-white" {...tabIndex(5)} />
            </Tabs>
            <Divider className="bg-white mt-3" variant="middle" />
        </>
    );
}

export default DrawerMobile;