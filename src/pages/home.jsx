// ====================== react ===========================

import { useState } from 'react';
import { useHistory } from "react-router-dom";
// ====================== styles ==========================
import { HomePageWrapper } from '../styles/wrappers';
import SearchSharpIcon from '@material-ui/icons/SearchSharp'
// ====================== fetches =========================
import { useStore } from '../store';
import { fetchSearchResults } from '../Helpers/fetches';
import * as ACTION from '../store/actions'
// ==================== components ========================
import Button from '../components/Button';
import SearchInput from '../components/SearchInput';
// ========================================================

const HomePage = () => {
    const history = useHistory();
    const [ searchText, setSearchText ] = useState('');
    const [ , dispatch ] = useStore();

    const onChangeHandler = ({ target }) => {
        setSearchText(target.value)
    };

    const onClickHandler = () => {
        fetchSearchResults(searchText)
        .then(data => {
            dispatch(ACTION.searchResults(data));
            history.push(`/search/:${ searchText }`);
        })
    };
        
    return (
        <HomePageWrapper>
            <SearchInput
                state={ searchText }
                onChangeHandler={ onChangeHandler }
                onClickHandler={ onClickHandler }
            />
            <Button 
                state={ searchText }
                onClickHandler={ onClickHandler }
            >
                <SearchSharpIcon fontSize='small'/>
                Search
            </Button>

        </HomePageWrapper>
    );
};

export default HomePage;
