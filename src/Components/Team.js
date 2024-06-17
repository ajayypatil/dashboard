import React from 'react'
import { Typography, useTheme, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {mockDataTeam} from '../Data/mockData'
import { tokens } from '../theme';
import Header from './Header'
import  AdminPanelSettingsOutlined  from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlined  from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlined  from '@mui/icons-material/SecurityOutlined';
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'name', headerName: 'Name', flex:1, cellClassName: "name-column--cell"},
    { field: 'email', headerName: 'Email', flex:1},
    { field: 'age', headerName: 'Age', flex:1},
    { field: 'phone', headerName: 'Phone Number', flex:1},
    { field: 'access', headerName: 'Access Level', flex:1,
       renderCell: ({row :{access}})=>{
                 return (
                  <Box width="60%" m="0 auto" p="5px" display="flex" justifyContent="center" 
                  backgroundColor={ access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}>
                   {access === "admin" && <AdminPanelSettingsOutlined/>}
                   {access === "manager" && <SecurityOutlined/>}
                   {access === "user" && <LockOpenOutlined/>}
                   <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
                   {access}
                   </Typography>
                  </Box>
                 )
    }}
  ]
  return (
    <Box m="20px">
      <Header title = "Team" subTitle="Managing the Team Members"/>
      <Box height="50vh" m="40px 0 0 0" >
        <DataGrid rows={mockDataTeam} columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        ></DataGrid>
      </Box>
    </Box>
  )
}

export default Team;