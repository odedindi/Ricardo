// ====================== react ===========================
import { lazy, useState } from 'react';
// ====================== styles ==========================
import { HomePageWrapper } from '../styles/ui/wrappers';
import SearchSharpIcon from '@material-ui/icons/SearchSharp'
// ==================== components ========================
const Button = lazy(() => import('../components/Button'))
const SearchInput = lazy(() => import('../components/SearchInput'))
// ========================================================

const HomePage = () => {
    const [ searchParam, setSearchParam ] = useState('');

    const inputChangeHandler = ({ target }) => {
        setSearchParam(target.value)
    }

    const searchClickHandler = () => {
        console.log(searchParam)
    }
    
    return (
        <HomePageWrapper>
            <SearchInput
                state={ searchParam }
                onChangeHandler={ inputChangeHandler }
            />
            <Button 
                state={ searchParam }
                onClickHandler={ searchClickHandler }
            >
                <SearchSharpIcon fontSize='small'/>
                Search
            </Button>

        </HomePageWrapper>
    )
}

export default HomePage;
