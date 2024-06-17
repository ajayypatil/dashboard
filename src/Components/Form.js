import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import { Formik } from 'formik'



const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
}

const Form = () => {
  const handleFormSubmit = (values) =>{
    console.log(values)
  }
  return (
    <Box m="20px">
      <Header title="Create User" subTitle="Create a New User Profile"/>
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues}/>
    </Box>
  )
}

export default Form