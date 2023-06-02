import styled from "@emotion/styled";
import { Box, Button, Card, Container, Link, Typography } from "@mui/material";
import * as React from "react";
import theme from "../Theme";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import Typed from 'typed.js';
import ME from '../../public/meCV.jpeg'

const CardMe = styled(Card)(({theme}) => ({
    boxShadow: '#07548336 -1px -1px 20px 20px',
    height: "34%",
    width: "60%",
    border: `1px solid ${theme.palette.primary.soft }`,
    transition: theme.transitions.create(['boxShadow', 'transform'], {
        duration: theme.transitions.duration.standard,
      }),
    '&:hover':{
        boxShadow: '10px solid #07548336',
        transform: "scale(1.3)"
    }
}));

const CardMeH1 = styled(Card)(({theme}) => ({
    width: '40%',
    height: '40%',
    padding: '7%',
    border: 0,
    boxShadow:0,
}));


export default function AboutMe(props){

    const [mode, setMode] = React.useState(localStorage.getItem('modeTheme'));

    return(
        <Container id="SobreMi" sx={{ height: "130vh", width: "100vw", alignItems: 'center', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
           
           <CardMeH1 elevation={0} color={
                theme.palette.mode === 'light' ?
                "white" :
                "dark"
            }>
            <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
           <Typography variant="h4" component='h4' > 
            Soy <Typography variant="h2" component='h2' color="primary">Christian Paez</Typography> desarrollador web Fullstack
           </Typography>

           <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>

           <Box sx ={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            padding: '6%'
           }}>
            <Button variant={
                theme.palette.mode === "light" ? "outlined" : "contained"
            } color="primary">Ver mis proyectos <GitHubIcon/></Button>
            <Button variant={
                theme.palette.mode === "light" ? "contained" : "oulined"
             } color="primary">
            <Link  sx={{ fontDecoration: 'none'}} href="https://devchrisbucket.s3.amazonaws.com/Christian+P%C3%A1ez+(5).pdf" target="_blank"/> 
            Descargar CV 
            <DownloadIcon/></Button>
           </Box>
            </CardContent>
           </CardMeH1>

            <CardMe color={
                theme.palette.mode === 'light' ?
                "white" :
                "dark"
            }>
                <CardContent sx={{
                    display: 'flex'
                }}>
                    <CardMedia sx={{ width: '30%'}}>
                        <img style={
                            {
                                width: '100%',
                                clipPath: 'circle(90px)',
                                objectPosition: '0px 29px'
                            }
                        } src={ME} alt="Me"/>
                    </CardMedia>

                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '70%',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        padding: '20px'
                    }}>
                    <Box sx={{flexGrow: 1}}>
                        <h2>About Me</h2>
                    </Box>

                    <Box sx={{ flexGrow: 1}}>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, doloribus. Eum ab a sequi. Reprehenderit, porro hic vel saepe explicabo quasi nostrum odio molestiae nemo esse amet facilis culpa? Labore?</Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                        <Button variant="outlined" color={theme.palette.mode === 'light' ? 'dark' : "white"}> Mas acerca de mi <ArrowForwardIcon/></Button>
                    </Box>
                    </Container>

                </CardContent>

            </CardMe>
        </Container>
    );
};