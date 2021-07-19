// ========================= react =========================
import * as React from 'react';
// ========================= style =========================
import { ArticleWrapper } from '../styles/wrappers';
// ======================== fetches ========================
import useFetch from '../helpers/useFetch';
// ====================== components =======================
import Container from '../components/Layout/Container';
import ArticleCard from '../components/ArticleCard';
import Spinner from '../components/Spinner';
// =========================================================

const ProductDetailsPage = () => {
	const [isLoading, data] = useFetch();

	return (
		<Container padding={true}>
			<ArticleWrapper>
				{isLoading ? (
					<Spinner />
				) : (
					<>
						<img
							src={data.article.imageUrl}
							alt={data.article.title}
						/>
						<ArticleCard type="productDetailsCard" {...data} />
					</>
				)}
			</ArticleWrapper>
		</Container>
	);
};

export default ProductDetailsPage;
