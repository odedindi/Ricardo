// ========================= react =========================
import React from 'react';
// ========================= style =========================
import { ArticleWrapper } from '../styles/wrappers';
// ======================== fetches ========================
import { useStore } from '../store';
import * as ACTION from '../store/actions';
// ====================== components =======================
import ArticleCard from '../components/ArticleCard';
import CartButton from '../components/Buttons/CartButton';
import Container from '../components/Layout/Container';
import { message } from 'antd';
import NoKnownDataGoToHome from '../components/NoKnownDataGoToHome';
// =========================================================

const ProductDetailsPage: React.FC = () => {
	const { state, dispatch }: Store = useStore();
	const { cartItems, chosenArticle, searchResults }: any = state;

	if (!chosenArticle.article) {
		return <NoKnownDataGoToHome />;
	}

	const addArticleToCartHandler = () => {
		if (
			cartItems.findIndex(
				(item: SearchArticle) => item.id === chosenArticle.article.id,
			) !== -1
		) {
			return message.info('Article is already in your cart');
		}
		const article = searchResults.articles.find(
			(item: SearchArticle) => item.id === chosenArticle.article.id,
		);
		dispatch(ACTION.addArticleToCart(article));
	};

	return (
		<Container padding={true}>
			<CartButton
				buttonType="addToCart"
				onClick={addArticleToCartHandler}
			/>
			<ArticleWrapper>
				<img
					src={chosenArticle.article.imageUrl}
					alt={chosenArticle.article.title}
				/>
				<ArticleCard cardType="large" {...chosenArticle} />
			</ArticleWrapper>
		</Container>
	);
};

export default ProductDetailsPage;
