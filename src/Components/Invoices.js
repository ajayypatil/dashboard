import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { mockDataInvoices } from '../Data/mockData'
import Header from './Header'

const Invoices = () => {
    
   const columns = [
    {field:"id", headerName : "ID", flex: 0.5},
    {field:"name", headerName : "Name", flex: 1},
    {field:"email", headerName : "Email", flex: 1},
    {field:"cost", headerName : "Cost", flex: 1, renderCell : (params)=> {
          return <Typography>$ {params.row.cost}</Typography>
    }},
    {field:"phone", headerName : "Phone", flex: 1},
    {field:"date", headerName : "Date", flex: 1}
   ]
         
  return (
    <Box  m="20px">
    <Header title="Invoices" subTitle="List of Invoice Balances"/>
      <Box height="50vh" m="40px 0 0 0">
      <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection disableRowSelectionOnClick 
      onRowSelectionModelChange={(newSelection) => {
        console.log(newSelection);
        let data =[];
        let filteredData;
         newSelection.forEach((id)=> {
          filteredData = mockDataInvoices.filter((obj)=> {
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
  )
}

export default Invoices