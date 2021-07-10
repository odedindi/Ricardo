// ======================== react =========================
import React from 'react';
import { useHistory } from 'react-router-dom';
// ======================== styles ========================
import { ResultsWrapper } from '../styles/wrappers';
// ======================= fetches ========================
import { useStore } from '../store';
import { fetchArticleDetails } from '../helpers/fetches';
import * as ACTION from '../store/actions';
// ====================== components ======================
import ArticleCard from '../components/ArticleCard';
import Container from '../components/Layout/Container';
import NoKnownDataGoToHome from '../components/NoKnownDataGoToHome';
// ========================================================

const SearchPage: React.FC = () => {
	const history = useHistory();
	const [state, dispatch]: Store = useStore();
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
						type="small"
						onClick={() => onClickHandler(article.id)}
						{...article}
					/>
				))}
			</ResultsWrapper>
		</Container>
	);
};

export default SearchPage;
