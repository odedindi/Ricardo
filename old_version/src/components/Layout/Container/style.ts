import styled from 'styled-components';

export const ContainerWrapper = styled.div<ContainerProps>`
	width: 100vw;

	position: relative;
	margin-right: auto;
	margin-left: auto;
	overflow: hidden;

	padding: ${({ padding }) =>
		padding ? '3rem 5.75rem' : '1rem 2.5rem'};

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
