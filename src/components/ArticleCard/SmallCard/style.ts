import styled from 'styled-components';

import { Card as MCard, CardContent, 
    CardMedia, Typography, DefaultTypographyProps } from '@material-ui/core';


export const Card = styled(MCard) `
    width: 245px;
`;

export const Image = styled(CardMedia) `
    height: 10px;
    padding-top: 56.25%; 
`;

export const Content = styled(CardContent) `
    height: 140px;
    padding: 0 1.65rem;
`

export const TitleWrapper = styled.div `
    height: 95px;
`

export const Title = styled(Typography)<DefaultTypographyProps>`
    font-size: 19px;
`

export const EndingWrapper = styled.div `
    height: 55px;
`

export const Price = styled(Typography)<DefaultTypographyProps>`
    font-size: 16px;
    font-family: sans-serif;
`