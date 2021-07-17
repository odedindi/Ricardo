// ====================== styles ==========================
import * as S from './style';
// ========================================================

const SearchInput = ({ onChangeHandler, onClickHandler, value }) => (
	<S.InputWrapper>
		<S.Input
			id="searchInput"
			label="Search text"
			variant="outlined"
			autoFocus={true}
			fullWidth={true}
			size="small"
			value={value}
			onChange={(event) => onChangeHandler(event)}
			onKeyUp={({ key }) =>
				key === 'Enter' && value.length ? onClickHandler() : ''
			}
		/>
	</S.InputWrapper>
);

export default SearchInput;
