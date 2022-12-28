import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Input';
import Gym from "../assets/images/gym.png";
import Login from "./Login";
import Home from "../pages/Home";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: { sm: '123px', xs: '40px' },
                mt: { sm: '32px', xs: '20px' },
                justifyContent: 'none'
            }}
            px='20px'>
            <Link to="/">
                <img src={Gym} alt="logo" style={{ width: "120px", height: "100px", margin: "-20px 20px", opacity: '100 %' }} />
            </Link>

            <Stack
                direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItem="flex-end">
                <Link to="/" style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625" }}>Home</Link>
                <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>Exercises</a>
                <Link to="/login" element={<Login />}><LoginIcon style={{ fontSize: '25px', margin: '0 0 0 100px', cursor: 'pointer', color: "#3A1212" }} /></Link>
            </Stack>
        </Stack>
    )
}

export default Navbar
