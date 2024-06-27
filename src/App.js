import { poroContext } from "./context"

import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "./components/MainLayout";

import SideBar from "./components/sideBar/SideBar";
import { useState } from "react";

import HamMenu from "./components/sideBar/HamMenu";
import PagesContainer from "./components/container/PagesContainer";

const theme = createTheme({
  typography: {
    fontFamily: "Vazir ,Roboto",
  },
});

const App = () => {

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <poroContext.Provider value={{ value, setValue, handleChange }}>
      <ThemeProvider theme={theme}>
        <HamMenu />
        <MainLayout>
          <SideBar />
          <PagesContainer />
        </MainLayout>
      </ThemeProvider>
    </poroContext.Provider>
  );
}

export default App;
