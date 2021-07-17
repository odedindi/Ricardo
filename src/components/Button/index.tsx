// ====================== react ===========================
import * as React from 'react';
// ====================== styles ==========================
import * as S from './style';

const Button: React.FC<ButtonProps> = ({
	isButtonDisabled,
	children,
	onClickHandler,
}) => (
	<S.Button
		data-testid="searchButton"
		disabled={isButtonDisabled}
		onClick={onClickHandler}>
		{children}
	</S.Button>
);

export default Button;
