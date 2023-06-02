import React from "react";
import { 
    AppBar, 
    Box,
    Typography,
    Container,
    Button
     } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled, useTheme } from "@mui/material/styles";
import Switch from '@mui/material/Switch';
import theme from "../Theme";
import changeMode from "../utils";
import AboutMe from "./AboutMe";

export default function Nav(){

    const theme = useTheme();

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
    <AppBar position="fixed" color={
        theme.palette.mode === 'light' ?
        "white" :
        "dark"
    }
    
    sx={{
        height: "10vh",
    }}>
        <Container sx={{ 
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" color="inherit" noWrap>TOMXED</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
            <TabContext value={value}>
                <Box >
                         <TabList onChange={handleChange}>
                            <Tab label="Inicio" value="1"/>
                            <Tab label="Sobre mi" value="2" />
                            <Tab label="Contactame" value="3" />
                        </TabList>
                </Box>

          </TabContext>
        </Box>
        <Box>
          <Button variant={
            theme.palette.mode === 'light' ?
            "outlined"
            :
            "contained"
          } color="primary">Contactame</Button>
        </Box>
        {/* <Box sx={{flexGrow: 1 }}>
            <Switch value={theme.palette.mode} onChange={(e) => {
                e.preventDefault();
                console.log(theme.palette.mode);
                console.log(localStorage.getItem('modeTheme'))
                changeMode(theme);
            }}></Switch>
        </Box> */}
        </Container>
    </AppBar>
    )
};


