import React, {useState, useEfffect} from 'react';
import styled from "@emotion/styled";
import { Container, Box, Paper, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';


// Imgs

import conversion from "../assets/projects/conversion-monetaria.png";
import conversionI from "../assets/projects/conversion-monetaria-I.png";
import conversionII from "../assets/projects/conversion-monetaria-II.png";
import conversionIII from "../assets/projects/conversion-monetaria-III.png";

const SectionProjects = styled(Container)(({theme}) => ({
    width: '100vw',
    height: '200vh',
}));

const CardImage = styled(CardMedia)(({theme}) => ({
    objectFit: "contain",
    width: '100%',
    height: '400px'

    // '&:hover': {
         
    // }
}));



export default function Projects()
{
    return (
        <SectionProjects>

            <Box>
            <Typography variant="h2" component="h2" color="primary" sx={{textAlign: 'center'}}>Projects</Typography>
            </Box>

            <Box>
                <Card>

                    <CardContent>
                        <Typography variant='h6' component='h6' sx={{textAlign: 'center'}}>Conversión Monetaria</Typography>
                    </CardContent>

                    <CardImage
                    image={conversion}>

                    </CardImage>
                    <CardContent>
                        <Box>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat unde dolorem sequi! 
                        </Box>
                    </CardContent>
                </Card>
            </Box>


        </SectionProjects>
    )
}