// ======================== react =========================
import React from 'react';
import { useHistory } from 'react-router-dom';
// ======================== styles ========================
import { ResultsWrapper } from '../styles/wrappers';
// ======================== store =========================
import { useStore } from '../store';
import * as ACTION from '../store/actions';
// ======================= fetches ========================
import { fetchArticleDetails } from '../helpers/fetches';
// ====================== components ======================
import ArticleCard from '../components/ArticleCard';
import Container from '../components/Layout/Container';
import NoKnownDataGoToHome from '../components/NoKnownDataGoToHome';
// ========================================================

const SearchPage: React.FC = () => {
	const history = useHistory();
	const { state, dispatch }: Store = useStore();
	const { articles, totalCount }: any = state.searchResults;

	const onClickHandler = (id: Id) => {
		fetchArticleDetails(id).then((data: ChosenArticle) => {
			dispatch(ACTION.chosenArticle(data));
			history.push(`/article/:${id}`);
		});
	};

	if (!articles) {
		return <NoKnownDataGoToHome />;
	}
	return (
		<Container padding={true}>
			<p>Total count: {totalCount}</p>
			<ResultsWrapper>
				{articles.map((article: ArticleDetails) => (
					<ArticleCard
						key={article.id}
						cardType="small"
						onClick={() => onClickHandler(article.id)}
						{...article}
					/>
				))}
			</ResultsWrapper>
		</Container>
	);
};

export default SearchPage;

// id: "1164735864"
// imageUrl: "https://img.ricardostatic.ch/t_200x150/pl/1164735864/0/1/hp-probook-650g1-i5268128win10156.jpg"​
// id: "1164735864"
// imageUrl: "https://img.ricardostatic.ch/t_1000x750/pl/1164735864/0/1/hp-probook-650g1-i5268128win10156.jpg"
