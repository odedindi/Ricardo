// ======================== react =========================
import { Link, useHistory } from "react-router-dom";
// ======================== styles ========================
import { ResultsWrapper } from '../styles/ui/wrappers'
// ======================= fetches ========================
import { useStore } from '../store';
import { fetchArticleDetails } from '../Helpers/fetches';
import { chosenArticleAction } from '../store/actions'
// ====================== components ======================
import ArticleCard from '../components/ArticleCard';
import Container from '../components/Layout/Container';
// ========================================================

const SearchPage = () => {
    const history = useHistory();
    const [ { searchResults }, dispatch ] = useStore();
    const articles = searchResults.articles;

    const goToHomePageInThreeSeconds = () => {
        setTimeout(() => {
            history.push('/')
        }, 3000);
    };

    const onClickHandler = (id) => {
        fetchArticleDetails(id)
        .then(data => {
            console.log(data)
            dispatch(chosenArticleAction(data));
            history.push(`/article/:${ id }`);
        });
    };

    return (

            <Container padding={ true }>
                { !articles ?   
                    <>  
                        <p>No known results.</p>
                        <p>You should be redirected back to the home page within few seconds</p>
                        <p>otherwise please press <Link to='/'>here</Link></p>
                        { goToHomePageInThreeSeconds() }
                    </>
                    :
                    <>
                        <p>Total count: { articles.length }</p>
                        <ResultsWrapper>
                          
                            {
                                articles.map(article => 
                                    <ArticleCard 
                                        key={ article.id } 
                                        onClick={ () => onClickHandler(article.id) }
                                        { ...article } 
                                    />               
                                )
                            }
                          
                        </ResultsWrapper>
                    </>
                }
            </Container>

    );
};

export default SearchPage;
