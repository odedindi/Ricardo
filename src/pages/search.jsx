// ======================== react =========================
import { lazy } from 'react';
import { useHistory } from "react-router-dom";
// ======================== styles ========================
import { ResultsWrapper } from '../styles/ui/wrappers'
// ======================= fetches ========================
import { useStore } from '../store';
import { chosenArticleAction } from '../store/actions'
// ====================== components ======================
const ArticleCard = lazy(() => import('../components/ArticleCard'))
const Container = lazy(() => import('../components/Layout/Container'))

// ========================================================

const SearchPage = () => {
    const history = useHistory();
    const [ state, dispatch ] = useStore();

    if (!state.searchResults.articles) {
        return (
            <Container>
                <p>No known results.</p>
                <p>Directin you back to the home page in 3 seconds</p>
                {
                    setTimeout(() => {
                    history.push('/')
                    }, 3000)
                }
            </Container>
        )
    }

    return (
        <Container padding={ true }>

            <p>Total count: { state.searchResults.articles.length }</p>
            <ResultsWrapper>
                {
                    state.searchResults.articles.map(article => 
                        <ArticleCard 
                            key={article.id} 
                            onClick={ () => dispatch(chosenArticleAction(article))}
                            { ...article } 
                        />               
                    )
                }
            </ResultsWrapper>
        </Container>
    )
}

export default SearchPage;
