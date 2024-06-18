import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'

const Calendar = () => {
  return (
    <Box m="20px">
      <Header title="Calendar" subTitle="Add events to calendar"/>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Typography variant='h1'>
          Comming Soon!!............
        </Typography>
      </Box>
    </Box>
  )
}

export default Calendar