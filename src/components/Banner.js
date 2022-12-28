import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import "../style/login.css"
import Model from '../assets/images/model.png';
const Banner = () => {
    return (
        <Box w={"50%"} sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position="relative" p="20px">
            <Typography color='#FF2625' opacity="93%"
                fontWeight="600" fontSize="30px">
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                mb="23px" mt="30px" color='#4d4d4d'>
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant="contained" color="error" href="#exercises"
                sx={{ backgroundColor: '#ff2625', padding: '10px' }}>Explore Exercises</Button>
            <Typography fontWeight={600} color="#ff2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: ' none' }
                }} fontSize="200px">Exercises</Typography>
            <img src={Model} alt='model' className='hero-banner-img' />
        </Box>
    )
}

export default Banner;
