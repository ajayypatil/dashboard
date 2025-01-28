
import TopBar from "./Components/TopBar";
import { useMode, colorModeContext } from "./theme";
import {  ThemeProvider } from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import { Outlet, useNavigate} from "react-router-dom";
import SideBar from "./Components/SideBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const isLoggedIn = useSelector((store)=> store.user.isLoggedIn);
  const navigate = useNavigate();
  useEffect(()=> {
    if(!isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn])
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
  ) }


export default App;
