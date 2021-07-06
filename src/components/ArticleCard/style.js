import styled from 'styled-components';

import { Card as MCard, CardContent, 
    CardMedia, Typography } from '@material-ui/core';


export const Card = styled(MCard) `
    width: 245px;
`;

export const Image = styled(CardMedia) `
    height: 10px;
    padding-top: 56.25%; 
`;

export const Content = styled(CardContent) `
    height: 115px;
    padding: 1.275rem 1.65rem;
`

export const Title = styled(Typography) `
    font-size: 20;
`
export const Price = styled(Typography) `
    font-size: 16;
    font-family: sans-serif;
`