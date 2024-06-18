import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import Header from './Header';
import { Formik } from 'formik';
import * as yup from 'yup';


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
}

const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
   lastName: yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),   
   email: yup.string().email('Invalid email').required('Required'),
   contact: yup.string()
              // .matches(phoneRegex, "Invalid Phone Number")
              .required('Required'),
   address1: yup.string().required('Required'),
   address2: yup.string().required('Required')    
});
const Form = () => {
  const handleFormSubmit = (values) =>{
    console.log(values)
  }
  return (
    <Box m="20px">
      <Header title="Create User" subTitle="Create a New User Profile"/>
      <Formik
       onSubmit={handleFormSubmit}
       initialValues={initialValues}
       validationSchema={userSchema}
       >
        {({values, errors, touched, handleBlur, handleChange, handleSubmit})=> (
          <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={3} columnSpacing={3}>
              <Grid item xs={6}>
               <TextField 
               fullWidth
                variant='filled'
                type='text'
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
               />
              </Grid>

              <Grid item xs={6}>
               <TextField 
               fullWidth
                variant='filled'
                type='text'
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name='lastName'
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
               />
              </Grid>
              <Grid item xs={6}>
               <TextField 
               fullWidth
                variant='filled'
                type='text'
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='email'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
               />
              </Grid>
              <Grid item xs={6}>
               <TextField 
               fullWidth
                variant='filled'
                type='text'
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name='contact'
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
               />
              </Grid>
              <Grid item xs={12}>
               <TextField 
               fullWidth
                variant='filled'
                type='text'
                label= "Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name='address1'
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
               />
              </Grid>

              <Grid item xs={12}>
               <TextField 
               fullWidth
                variant='filled'
                type='text'
                label= "Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='address2'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
               />
              </Grid>
                
            </Grid>
            <Box display= 'flex' justifyContent='center' mt='20px'>
            <Button type="submit" variant='contained'>
            Create User
            </Button>
            </Box>
          </form> )
        }
       </Formik>
    </Box>
  )
}

export default Form