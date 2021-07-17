// ======================== react =========================
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// ======================== styles ========================
import { ResultsWrapper } from '../styles/wrappers';
// ======================= fetches ========================
import { useStore } from '../store';
import {
	fetchArticleDetails,
	fetchSearchResults,
} from '../helpers/fetches';
import * as ACTION from '../store/actions';
// ====================== components ======================
import ArticleCard from '../components/ArticleCard';
import Container from '../components/Layout/Container';
import Spinner from '../components/Spinner';
// ========================================================

const SearchPage = () => {
	const history = useHistory();
	let { pathname } = useLocation();
	const [state, dispatch] = useStore();
	const { articles, totalCount } = state.searchResults;

	const [searchResults, setSearchResults] = React.useState(
		state.searchResults,
	);

	// if user refresh the page and the store get erased, fetch the data again
	React.useEffect(() => {
		if (articles === undefined) {
			let searchText = pathname.split(':')[1];
			fetchSearchResults(searchText).then((data) => {
				dispatch(ACTION.searchResults(data));
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		setSearchResults({ articles: articles, totalCount: totalCount });
	}, [articles, totalCount]);

	const onClickHandler = (id) => {
		fetchArticleDetails(id).then((data) => {
			dispatch(ACTION.chosenArticle(data));
			history.push(`/article/:${id}`);
		});
	};

	return (
		<Container padding={true}>
			<p>Total count: {totalCount}</p>
			<ResultsWrapper>
				{!searchResults.articles ||
				searchResults.articles === undefined ? (
					<Spinner />
				) : (
					searchResults.articles.map((article) => (
						<ArticleCard
							key={article.id}
							type="searchResultsCard"
							onClick={() => onClickHandler(article.id)}
							{...article}
						/>
					))
				)}
			</ResultsWrapper>
		</Container>
	);
};

export default SearchPage;
