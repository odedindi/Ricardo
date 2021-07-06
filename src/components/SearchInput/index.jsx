// ====================== styles ==========================
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const InputWrapper = styled.div `
    width: 85%;
    margin-right: .5rem;
`
// ========================================================

const SearchInput = ({ onChangeHandler, state }) => (
    <InputWrapper>
        <TextField
            id="searchInput"
            label="Search text"
            variant="outlined"
            value={ state }
            onChange={ (event) => onChangeHandler(event) }
            autoFocus={ true }
            fullWidth={ true }
            size='small'
        />
    </InputWrapper>
);

export default SearchInput;
