import React from 'react';
import Model from "../assets/images/model.png";
import '../style/login.css';
import { Box, FormControlLabel, FormGroup, Grid, Button, Paper, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
    const paperStyle = { padding: 30, height: '60vh', width: 430, mb: '50px' }
    return (
        <div>
            <Box w={"50%"} sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }} position="relative" p="20px">
                <img src={Model} alt='model' className='hero-banner-img' />
            </Box>
            <Grid mt={{ sm: "-100px" }} align={"center"} width={"50%"} lineHeight={"80px"}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid><h2>LOG IN</h2></Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required />
                    <TextField label='Password' type='password' placeholder='Enter password' fullWidth required />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label='Remember me' />
                    </FormGroup>
                    <Button type='submit' color='primary' variant='contained' fullWidth>SIGN IN</Button>
                    <Typography fontSize={"18px"} align={"center"}>Or</Typography>
                    <Button type='submit' color='primary' variant='contained' fullWidth>SIGN UP</Button>
                </Paper>
            </Grid>
        </div>
    );
}
export default Login;
