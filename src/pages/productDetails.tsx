// ========================= react =========================
import React from 'react';
// ========================= style =========================
import { ArticleWrapper } from '../styles/wrappers';
// ======================== fetches ========================
import { useStore } from '../store';
// ====================== components =======================
import Container from '../components/Layout/Container';
import ArticleCard from '../components/ArticleCard';
import NoKnownDataGoToHome from '../components/NoKnownDataGoToHome';
// =========================================================

const ProductDetailsPage: React.FC = () => {
	const [state]: Store = useStore();
	const { chosenArticle }: any = state;

	if (!chosenArticle.article) {
		return <NoKnownDataGoToHome />;
	}

	return (
		<Container padding={true}>
			<ArticleWrapper>
				<img
					src={chosenArticle.article.imageUrl}
					alt={chosenArticle.article.title}
				/>
				<ArticleCard type="large" {...chosenArticle} />
			</ArticleWrapper>
		</Container>
	);
};

export default ProductDetailsPage;
