// ========================= react =========================
// ========================= style =========================
import { ArticleWrapper } from '../styles/wrappers'
// ======================== fetches ========================
import { useStore } from '../store';
// ====================== components =======================
import Container from '../components/Layout/Container'
import ArticleCard from "../components/ArticleCard";
import NoKnownDataGoToHome from '../components/NoKnownDataGoToHome';
// =========================================================

const ProductDetailsPage = () => {
    const [ { chosenArticle } ] = useStore();
    if (!Object.entries(chosenArticle).length) { 
        return <NoKnownDataGoToHome/>
    };

    return (
        <Container padding={ true }>
            <ArticleWrapper>
                <img 
                    src={ chosenArticle.article.imageUrl }
                    alt={ chosenArticle.article.title }
                />
                <ArticleCard type='large' { ...chosenArticle } />
            </ArticleWrapper>
        </Container >
    );
};

export default ProductDetailsPage;
