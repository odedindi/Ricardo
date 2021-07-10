import styled from 'styled-components';

export const ContainerWrapper = styled.div<ContainerProps>`
	position: relative;
	width: auto;
	margin-right: auto;
	margin-left: auto;
	padding: ${({ padding }) =>
		padding ? '3rem 5.75rem' : '1rem 2.5rem'};
	overflow: hidden;
	@media only screen and (max-width: 1024px) {
		max-width: 950px;
	}

	@media only screen and (max-width: 768px) {
		max-width: 700px;
		padding: ${({ padding }) =>
			padding ? '3rem 1.25rem' : '1rem 2.5rem'};
	}

	@media only screen and (max-width: 414px) {
		max-width: 395px;
		padding: ${({ padding }) =>
			padding ? '3rem .75rem' : '1rem 2.5rem'};
	} ;
`;
