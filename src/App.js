import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise/:id' element={<ExerciseDetail />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App
