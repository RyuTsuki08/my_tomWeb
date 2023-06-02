import { Container } from "@mui/material";
import {React, useState} from "react";
import theme from "../Theme";


export default function Background(props){
    return (
        <Container id="Inicio" sx={{
            backgroundColor: theme.palette.mode == 'dark' ? "#121212" : "#fff",
            height: "100vh",
            width: "100vw"
        }}>

        </Container>
    );
};