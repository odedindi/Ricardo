import styled from 'styled-components';
import { Card as MCard, CardContent, CardMedia, Divider, Typography } from '@material-ui/core';


export const Card = styled(MCard) `
    width: 33vw;
    min-width: 17rem;
    max-width: 33rem;

    height: 100%;

`

export const Content = styled(CardContent) `
    /* height: 115px; */
    padding: 1.275rem 1.65rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Title = styled(Typography) `
    font-weight: bold;
`