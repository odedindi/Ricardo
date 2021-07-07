// ====================== styles ==========================
import * as S from './style';
// ========================================================

const SearchInput = ({ onChangeHandler, onClickHandler, state }) => (
    <S.InputWrapper>
        <S.Input
            id="searchInput"
            label="Search text"
            variant="outlined"
            autoFocus={ true }
            fullWidth={ true }
            size='small'
            value={ state }
            onChange={ (event) => onChangeHandler(event) }
            onKeyUp={ ({ key }) => key === 'Enter' && state.length ? onClickHandler() : ''}
        />
    </S.InputWrapper>
);

export default SearchInput;
