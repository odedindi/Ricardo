// ====================== styles ==========================
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const InputWrapper = styled.div `
    width: 85%;
    margin-right: .5rem;
`
// ========================================================

const SearchInput = ({ onChangeHandler, onClickHandler, state }) => (
    <InputWrapper>
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
    </InputWrapper>
);

export default SearchInput;
