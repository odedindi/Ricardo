// ========================= react =========================
import React from 'react';
// ====================== styles ==========================
import * as S from './style';
// ========================================================


const SearchInput: React.FC<SearchInputProps> = ({ onChangeHandler, onClickHandler, state }) => (
    <S.InputWrapper>
        <S.Input
            id="searchInput"
            label="Search text"
            variant="outlined"
            autoFocus={ true }
            fullWidth={ true }
            size='small'
            value={ state }
            onChange={ onChangeHandler }
            onKeyUp={ ({ key }: React.KeyboardEvent) => 
                key === 'Enter' && state.length ? onClickHandler() : ''
            }
        />
    </S.InputWrapper>
);

export default SearchInput;
