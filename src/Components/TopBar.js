import React from "react";
import { useTheme, Box, IconButton, InputBase } from "@mui/material";
import { useContext, useState } from "react";
import { colorModeContext } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar,  Button, Grid, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slices/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((store)=> store.user.userName);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function handleLogout(){
    dispatch(removeUser());
    navigate('/')
    }
  const colorMode = useContext(colorModeContext);
  const theme = useTheme();
   
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "primary[400]",
          borderRadius: 3,
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>


      {/* Icons  */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        

          <Tooltip title={userName} arrow placement="left">
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <PersonOutlinedIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>


          </Tooltip>
        
      </Box>
    </Box>
  );
};

export default TopBar;
