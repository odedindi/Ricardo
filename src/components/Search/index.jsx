
// ====================== styles ==========================
import * as S from './style';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import { SearchButton } from '../../styles/ui/buttons';
// ==================== components ========================
import TextField from '@material-ui/core/TextField';



const Search = ({ inputChangeHandler, onSearchHandler, state }) => (
    <S.SearchWrapper>
        <S.InputWrapper>
        <TextField
            id="searchInput"
            label="Search text"
            variant="outlined"
            value={ state }
            onChange={ (event) => inputChangeHandler(event) }
            autoFocus={ true }
            fullWidth={ true }
            size='small'
        />
        </S.InputWrapper>
            <SearchButton 
                active={ state.length > 0 ? true : false }
                onClick={ onSearchHandler }
            >
            <SearchSharpIcon fontSize='small'/>
            Search
        </SearchButton>

    </S.SearchWrapper>
);

export default Search;
