// ========================= react =========================
import * as React from 'react';
import { useLocation } from 'react-router-dom';
// ========================= style =========================
import { ArticleWrapper } from '../styles/wrappers';
// ======================== fetches ========================
import { useStore } from '../store';
import { fetchArticleDetails } from '../helpers/fetches';
import * as ACTION from '../store/actions';
// ====================== components =======================
import Container from '../components/Layout/Container';
import ArticleCard from '../components/ArticleCard';
import Spinner from '../components/Spinner';
// =========================================================

const ProductDetailsPage = () => {
	let { pathname } = useLocation();
	const [{ chosenArticle }, dispatch] = useStore();

	const [chosen, setChosen] = React.useState(chosenArticle);

	// if user refresh the page and the store get erased, fetch the data again
	React.useEffect(() => {
		if (!chosenArticle || chosenArticle.article === undefined) {
			let articleId = pathname.split(':')[1];
			fetchArticleDetails(articleId).then((data) => {
				console.log(data);
				dispatch(ACTION.chosenArticle(data));
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	React.useEffect(() => {
		setChosen(chosenArticle);
	}, [chosenArticle]);

	return (
		<Container padding={true}>
			<ArticleWrapper>
				{!chosen || !chosen.article ? (
					<Spinner />
				) : (
					<>
						<img
							src={chosen.article.imageUrl}
							alt={chosen.article.title}
						/>
						<ArticleCard type="productDetailsCard" {...chosen} />
					</>
				)}
			</ArticleWrapper>
		</Container>
	);
};

export default ProductDetailsPage;
