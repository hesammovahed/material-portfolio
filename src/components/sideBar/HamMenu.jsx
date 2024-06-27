

import { Fab, Drawer } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

import DrawerMobile from './DrawerMobile';

const HamMenu = () => {

  // const { value, handleChange } = useContext(poroContext)
  const [state, setState] = useState(false);
  const handleDrawer = () => {
    setState(!state);
  };

  return (
    <>
      <span className="md:hidden m-2 absolute" onClick={handleDrawer}>
        <Fab aria-label="hammenu">
          <AiOutlineMenu size={25} />
        </Fab>
      </span>
      <div className="md:hidden">
        <Drawer
          open={state}
          onClose={() => handleDrawer(false)}
          variant="temporary"
          sx={{
            "	& .MuiDrawer-paper": { width: 300 },
            display: {
              xs: "block",
              md: "block",
              lg: "none",
              xl: "none",
            },
          }}
          anchor="right"
        >
          <DrawerMobile handleDrawer={handleDrawer} />
        </Drawer>
      </div>
    </>
  );
};

export default HamMenu;
