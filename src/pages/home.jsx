// ====================== react ===========================
import { lazy, useState } from 'react';
import { useHistory } from "react-router-dom";
// ====================== styles ==========================
import { HomePageWrapper } from '../styles/ui/wrappers';
import SearchSharpIcon from '@material-ui/icons/SearchSharp'
// ====================== fetches =========================
import { fetchSearchResults } from '../Helpers/fetches';
import { useStore } from '../store';
import { searchResultsAction } from '../store/actions'
// ==================== components ========================
const Button = lazy(() => import('../components/Button'))
const SearchInput = lazy(() => import('../components/SearchInput'))
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
            dispatch(searchResultsAction(data));
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
    )
}

export default HomePage;
