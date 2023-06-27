import React, { useEffect } from "react";
import theme from './Theme';
import { Button } from "@mui/material";
import { useTheme, ThemeProvider} from "@mui/material/styles";
// import {  Octokit } from "octokit";
import Nav from "./components/Nav";
import Background from "./components/Background";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import styled from "@emotion/styled";
import TabPanel from "@mui/lab/TabPanel/TabPanel";
import Projects from "./components/Projects";



function App(props){

    // const octokit = new Octokit({ auth: import.meta.env.VITE_PAT });

    const realizedRequest = async () => {
        // const {
        //     data: { login },
        //   } = await octokit.request("GET /user");
        //   alert("Hi there, " + login);
    };

    useEffect(() => {
        realizedRequest();
    }, []);

    localStorage.setItem('modeTheme', theme.palette.mode);

    return (

        <ThemeProvider theme={theme}>
              <Nav/>
              <Background/>
              <AboutMe/>
              <Skills/>
              <Projects/>
        </ThemeProvider>

    );
};

export default App;