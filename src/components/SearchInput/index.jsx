// ====================== styles ==========================
import * as S from './style';
import TextField from '@material-ui/core/TextField';
// ========================================================

const SearchInput = ({ onChangeHandler, onClickHandler, state }) => (
    <S.InputWrapper>
        <TextField
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
