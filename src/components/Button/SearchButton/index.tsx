// ====================== react ===========================
import * as React from 'react';
// ====================== styles ==========================
import * as S from './style';

const SearchButton: React.FC<SearchButtonProps> = ({
	children,
	isButtonDisabled,
	onClickHandler,
}) => (
	<S.Button data-testid="searchButton" onClick={onClickHandler}
	disabled={isButtonDisabled}

	>
		{children}
	</S.Button>
);

export default SearchButton;