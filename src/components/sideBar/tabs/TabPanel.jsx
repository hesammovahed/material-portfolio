import { useContext } from "react";
import { poroContext } from "../../../context";

import { Typography } from "@mui/material";

const TabPanel = ({ index, children }) => {

    const { value } = useContext(poroContext)
    return (
        <div className=" h-screen">
            {value === index && (
                <div>
                    <Typography>{children}</Typography>
                </div>
            )}
        </div>
    );
}

export default TabPanel;