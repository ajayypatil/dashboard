import React from "react";
import { Typography, useTheme, Box, Toolbar } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../Data/mockData";
import { tokens } from "../theme";
import Header from "./Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Access Level" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 1 },
  ];
  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subTitle="List of contacts for future reference"
      />
      <Box height="50vh" m="40px 0 0 0">
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
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
          onRowSelectionModelChange={(newSelection) => {
        console.log(newSelection);
        let data =[];
        let filteredData;
         newSelection.forEach((id)=> {
          filteredData = mockDataContacts.filter((obj)=> {
          return obj.id == id;
        });
        const filteredObj = filteredData[0];
        data.push(filteredObj)
         })
        console.log(data)
      }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
