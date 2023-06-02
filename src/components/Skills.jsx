import React from "react";
import BabelIcon from "../assets/babel-svgrepo-com.svg";
import NodeIcon from "../assets/node-js-svgrepo-com.svg";
import MongoIcon from "../assets/mongodb-logo-svgrepo-com.svg";
import MotokoIcon from "../assets/1_Xe0Pjcry90UcPQ2bIoKxaw.png"
import ExpressIcon from "../assets/express-svgrepo-com.svg";
import HtmlIcon from "../assets/html-svgrepo-com.svg";
import CssIcon from "../assets/css-3-svgrepo-com.svg";
import JsIcon from "../assets/javascript-svgrepo-com.svg";
import BootstrapIcon from "../assets/bootstrap-svgrepo-com.svg";
import DjIcon from "../assets/django-svgrepo-com.svg";
import PhpIcon from "../assets/php3-svgrepo-com.svg";
import MuiIcon from "../assets/material-ui-svgrepo-com.svg";
import NextIcon from "../assets/nextjs-svgrepo-com.svg";
import PythonIcon from "../assets/python-svgrepo-com.svg";
import GitIcon from "../assets/git-svgrepo-com.svg";
import ReactIcon from "../assets/react-svgrepo-com.svg";
import MysqlIcon from "../assets/mysql-logo-svgrepo-com.svg";
import JqueryIcon from "../assets/jquery-svgrepo-com.svg";
import WebpackIcon from "../assets/webpack-svgrepo-com.svg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import theme from "../Theme";
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography  } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import styled from "@emotion/styled";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CardSkill = styled(Card)(({theme}) => ({
    width: '50vw',
    marginLeft: '20%',
}));

export default function Skills(props){

    const skillsIcons = [
        {
            title: 'Html 5',
            img: HtmlIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Css3',
            img: CssIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Javascript',
            img: JsIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'PHP',
            img: PhpIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Motoko',
            img: MotokoIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Python',
            img: PythonIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'React',
            img: ReactIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
         {
            title: 'Node JS',
            img: NodeIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Django',
            img: DjIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Mysql',
            img: MysqlIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'MongoDB',
            img: MongoIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Next Js',
            img: NextIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Express Js',
            img: ExpressIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Jquery',
            img: JqueryIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Webpack',
            img: WebpackIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Babel',
            img: BabelIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Bootstrap',
            img: BootstrapIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Git',
            img: GitIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
        {
            title: 'Material ui',
            img: MuiIcon,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum, quia eligendi omnis placeat deleniti officia perferendis dicta laborum ducimus maxime odit rerum distinctio neque iusto facere voluptas voluptatibus quaerat!'
        },
    ]

    return(

        <Container sx={{width: "100vw", height: '100vh', display:'flex', flexDirection: 'column', alginItems:'center', justifyContent: 'space-evenly'}}>

            <Box>
            <Typography variant="h2" component="h2" color="primary" sx={{textAlign: 'center'}}>Skills</Typography>
            </Box>

            <Box>
                <Carousel sx={{
                    height: '100%'
                }}
                fullHeightHover={false}
                cycleNavigation={true}
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                NextIcon={<ArrowForwardIosIcon sx={{height: '100%'}} color={theme.palette.mode == 'light' ? "dark" : "white"} />}
                PrevIcon={<ArrowBackIosNewIcon sx={{height: '100%'}} color={theme.palette.mode == 'light' ? "dark" : "white"}/>}
                indicatorIconButtonProps={{
                    style: {
                        display: 'none', 
                    }}}
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'transparent',
                            height: '100%',
                        }
                    }}
                animation="slide">
                    {
                        skillsIcons.map(obj => {
                            return (
                                <CardSkill elevation={0}>
                                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                    <CardMedia>
                                        <CardActionArea>
                                            <img style={{ width: '300px', padding: '5%'}} src={obj.img} alt="skill" />
                                        </CardActionArea>
                                    </CardMedia>

                                    <CardContent>
                                    <Box>
                                        <Typography variant="h2" color="primary" sx={{textAlign: 'center'}}>{obj.title}</Typography>
                                    </Box>
                                        <Typography variant="h6">{obj.description}</Typography>
                                    </CardContent>

                                    </Box>
                                </CardSkill>
                            )
                        })
                    }
                </Carousel>
            </Box>

        </Container>

    );

};