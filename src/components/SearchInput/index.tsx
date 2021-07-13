// ========================= react =========================
import React from 'react';
// ====================== styles ==========================
import * as S from './style';
// ========================================================

const SearchInput: React.FC<SearchInputProps> = ({
	onChangeHandler,
	onClickHandler,
	value,
}) => (
	<S.InputWrapper>
		<S.Input
			id="searchInput"
			data-testid="searchInput"
			label="Search text"
			variant="outlined"
			autoFocus={true}
			fullWidth={true}
			size="small"
			value={value}
			onChange={onChangeHandler}
			onKeyUp={({ key }: React.KeyboardEvent) =>
				key === 'Enter' && value.length ? onClickHandler() : ''
			}
		/>
	</S.InputWrapper>
);

export default SearchInput;
