// ======================== react =========================
import { useHistory } from "react-router-dom";
// ======================== styles ========================
import { ResultsWrapper } from '../styles/wrappers'
// ======================= fetches ========================
import { useStore } from '../store';
import { fetchArticleDetails } from '../Helpers/fetches';
import * as ACTION from '../store/actions'
// ====================== components ======================
import ArticleCard from '../components/ArticleCard';
import Container from '../components/Layout/Container';
import NoKnownDataGoToHome from '../components/NoKnownDataGoToHome';
// ========================================================

const SearchPage = () => {
    const history = useHistory();
    const [ { searchResults }, dispatch ] = useStore();
    const articles = searchResults.articles;

    const onClickHandler = (id) => {
        fetchArticleDetails(id)
        .then(data => {
            dispatch(ACTION.chosenArticle(data));
            history.push(`/article/:${ id }`);
        });
    };

    if (!articles) {
        return <NoKnownDataGoToHome />
    };
    return (
        <Container padding={ true }>      
            <p>Total count: { articles.length }</p>
            <ResultsWrapper> 
                {
                    articles.map(article => 
                        <ArticleCard 
                            key={ article.id } 
                            type='small'
                            onClick={ () => onClickHandler(article.id) }
                            { ...article } 
                        />               
                    )
                }
            </ResultsWrapper>   
        </Container>
    );
};

export default SearchPage;
