
import TopBar from "./Components/TopBar";
import { useMode, colorModeContext } from "./theme";
import {  ThemeProvider } from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import { Outlet} from "react-router-dom";

import SideBar from "./Components/SideBar";

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
      <div className="app">
      <SideBar/>
       <main className="content">
        <TopBar/>
        <Outlet/>
       </main>
     </div>
      </CssBaseline>
    </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
