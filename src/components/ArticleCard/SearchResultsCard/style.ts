import styled from 'styled-components';

import {
	Card as MCard,
	CardContent,
	CardMedia,
	Typography,
	DefaultTypographyProps,
} from '@material-ui/core';

export const Card = styled(MCard)`
	width: 245px;
`;

export const Image = styled(CardMedia)`
	height: 8px;
	padding-top: 56.25%;
`;

export const Content = styled(CardContent)`
	height: 96px;
	padding: 0 1.65rem;
`;

export const TitleWrapper = styled.div`
	height: 77.5px;
`;

export const Title = styled(Typography)<DefaultTypographyProps>`
	font-size: 17px;
`;

export const EndingWrapper = styled.div`
	height: 55px;
`;

export const Price = styled(Typography)<DefaultTypographyProps>`
	font-size: 16px;
	font-family: sans-serif;
`;
