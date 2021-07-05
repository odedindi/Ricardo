// ====================== react ===========================
import { lazy, useState } from 'react';

// ====================== styles ==========================
import { SmallLogo } from '../styles/ui/logo'
// ==================== components ========================

const Container = lazy(() => import('../components/Layout/Container'))
const Search = lazy(() => import('../components/Search'))
const HomePage = () => {
    const [ searchParam, setSearchParam ] = useState('');

    const inputChangeHandler = ({ target }) => {
        setSearchParam(target.value)
        console.log(searchParam)
    }

    const onSearchHandler = () => {
        console.log(searchParam)
    }
    
    return (
        <Container padding={true} >
            <SmallLogo>Ricardo</SmallLogo>


            <Search
                state={ searchParam }
                inputChangeHandler={ inputChangeHandler }
                onSearchHandler={ onSearchHandler }
            />
        
        </Container>
    )
}

export default HomePage;
