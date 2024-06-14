import { useTheme } from '@emotion/react';
import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { tokens } from '../theme';
import { Box, IconButton, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import user from '../utils/user.png'
import { Link } from 'react-router-dom';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isVisible, setIsVisible] = useState(true);
    
  return (
    <Box width={isVisible ? ("undefined"):("50px")}
    sx={{
        "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
            color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
            color: "#6870fa !important"
        }
    }}>
    
        <Sidebar width={isVisible ? ("undefined"):("50px")}>
        <Box display="flex" justifyContent="space-around">
        {isVisible && (<Typography variant='h4' align='center' paddingTop='10px' fontWeight='bold'>Admin</Typography>)}
        <IconButton onClick={()=> {
            setIsVisible(!isVisible)
        }}>
         <MenuOutlinedIcon sx={{marginLeft:"5px"}}/>
        </IconButton>
        </Box>
        {isVisible && (<Box align="center" marginTop="20px">
            <img src={user} alt='UserIcon' height="100px" ></img>
            <Typography variant='h4' align='center' paddingTop='10px'>Ajay Yadav</Typography>
        </Box>)}
        
        {
            isVisible && (
                <Menu>
            <SubMenu label='Data'>
                <MenuItem component={<Link to="/team"/>}>
                <Box display="flex" columnGap={2}>
                <Diversity3OutlinedIcon></Diversity3OutlinedIcon>
                Manage Team
                </Box>
                 </MenuItem>

                <MenuItem component={<Link to="/contacts"/>}> 
                <Box display="flex" columnGap={2}>
                <ContactsOutlinedIcon></ContactsOutlinedIcon>
                Contacts Information
                </Box>
               </MenuItem>

                <MenuItem component={<Link to="/invoices"/>}>
                <Box display="flex" columnGap={2}>
                <ReceiptOutlinedIcon></ReceiptOutlinedIcon>
                Invoices Balances
                </Box>
                 </MenuItem>
            </SubMenu>


            <SubMenu label='Pages'>
                <MenuItem component={<Link to="/form"/>}> 
                <Box display="flex" columnGap={2}>
                <AccountBoxOutlinedIcon></AccountBoxOutlinedIcon>
                Profile Form 
                </Box>
                </MenuItem>
                
                <MenuItem component={<Link to="/calendar"/>}>
                <Box display="flex" columnGap={2}>
                <CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon>
                Calendar 
                </Box>
                 </MenuItem>

                <MenuItem component={<Link to="/faq"/>}>
                <Box display="flex" columnGap={2}>
                <LiveHelpOutlinedIcon></LiveHelpOutlinedIcon>
                FAQ Page 
                </Box>
                 </MenuItem>
            </SubMenu>


            <SubMenu label='Charts'>
            <MenuItem component={<Link to="/bar"/>}>
            <Box display="flex" columnGap={2}>
                <BarChartOutlinedIcon></BarChartOutlinedIcon>
                Bar Chart
                </Box>
             </MenuItem>

            <MenuItem component={<Link to="/pie"/>}>
            <Box display="flex" columnGap={2}>
                <PieChartOutlineOutlinedIcon></PieChartOutlineOutlinedIcon>
                Pie Chart 
                </Box>
             </MenuItem>

            <MenuItem component={<Link to="/line"/>}>
            <Box display="flex" columnGap={2}>
                <ShowChartOutlinedIcon></ShowChartOutlinedIcon>
                Line Chart 
                </Box>
             </MenuItem>

            <MenuItem component={<Link to="/geography"/>}>
            <Box display="flex" columnGap={2}>
                <MapOutlinedIcon></MapOutlinedIcon>
                Geography Chart 
                </Box>
             </MenuItem>
            </SubMenu>
            </Menu>
            )
        }
        </Sidebar>
    </Box>
  )
}

export default SideBar;