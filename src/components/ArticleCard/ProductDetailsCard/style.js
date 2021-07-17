import styled from 'styled-components';
import {
	Card as MCard,
	CardContent,
	Typography,
} from '@material-ui/core';

export const Card = styled(MCard)`
	width: 43vw;
	min-width: 17rem;
	max-width: 43rem;
	height: 100%;
`;

export const Content = styled(CardContent)`
	padding: 1.275rem 2.175rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Title = styled(Typography)`
	font-weight: bold;
`;
