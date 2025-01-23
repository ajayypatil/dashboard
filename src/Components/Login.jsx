import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { checkValidData } from '../utils/validate';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isLogin, setISLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigte = useNavigate();
    
    const email = useRef();
    const password = useRef();

    function submitHandler() {
    //   let message =  checkValidData(email.current.value, password.current.value);
    //   setErrorMessage(message);
    //   if(message ){return} 
    //   else {
    //     navigte('/browse');
    //   };
     fetch("", {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:email, password: password})

     }).then((res) => res.json()).then((data)=> console.log(data))
       
    };

   
    return (
        <Box sx={{width:'30%', ml:'35%', mt:'10%'}}>
            <form >
            <Stack spacing={2} direction="column">
            {!isLogin && <TextField
                id="filled-basic" label="Your Name" variant="filled" />}
            <TextField
                id="filled-basic" label="Email" variant="filled" inputRef={email} />
                
            <TextField
                 id="outlined-password-input"
                label="Password"
                type="password" variant="filled" inputRef={password} />
                  <Typography variant="caption" color="textSecondary" gutterBottom sx={{ display: 'block' }} onClick={()=> {setISLogin(!isLogin)}}>
           {errorMessage}
      </Typography> 
            {!isLogin && <TextField
                id="outlined-password-input"
                label="Confirm Password"
                type="password" variant="filled" />}

                  

            <Button variant="contained" onClick={submitHandler}>{isLogin ? "Sign In" : "Sign Up"}</Button>
           
           <Typography variant="caption" gutterBottom sx={{ display: 'block' }} onClick={()=> {setISLogin(!isLogin);
            setErrorMessage(null)
           }}>
           <Link href="#"> {isLogin ? "New User? Sign Up Now":"Already Registred? Sign In Now"} </Link>
      </Typography>
           
            </Stack>

        </form>
        </Box>

    );
}

export default Login;