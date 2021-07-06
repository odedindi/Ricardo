// ========================= react =========================
import { Redirect } from "react-router-dom";
// ========================= style =========================
import { ArticleWrapper } from '../styles/ui/wrappers'
// ======================== fetches ========================
import { useStore } from '../store';
// ====================== components =======================
import ArticleBlock from '../components/ArticleBlock';
import Container from '../components/Layout/Container'

const ProductDetailsPage = () => {
    const [ { chosenArticle } ] = useStore();


    console.log(chosenArticle)
    if (!Object.entries(chosenArticle).length) { 
        return <Redirect to='/' />
    };

    return (
        <Container padding={ true }>
            <ArticleWrapper>
                <img 
                    src={ chosenArticle.article.imageUrl }
                    alt={ chosenArticle.article.title }
                />
                <ArticleBlock { ...chosenArticle } />
            </ArticleWrapper>
        </Container >
    )
}

export default ProductDetailsPage;
