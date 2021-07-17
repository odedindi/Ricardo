import styled from 'styled-components';

export const NavBarWrapper = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: flex-end;

	width: 90%;

	.cartButton {
		margin-bottom: -0.8rem;
	}

	@media only screen and (max-width: 480px) {
		flex-flow: row wrap;
	} ;
`;
