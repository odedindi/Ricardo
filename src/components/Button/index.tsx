// ====================== react ===========================
import React from 'react';
// ====================== styles ==========================
import * as S from './style';

const Button: React.FC<ButtonProps> = ({
	active,
	children,
	onClickHandler,
}) => (
	<S.Button
		data-testid="searchButton"
		active={active}
		disabled={!active}
		onClick={onClickHandler}>
		{children}
	</S.Button>
);

export default Button;
