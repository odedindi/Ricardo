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
import Pagination from '../components/SearchResultsPagination';
import Spinner from '../components/Spinner';
// ========================================================

const SearchPage = () => {
	const history = useHistory();
	let { pathname } = useLocation();
	const [state, dispatch]: Store = useStore();
	const { articles, totalCount }: any = state.searchResults;

	const [searchResults, setSearchResults] = React.useState<any>(
		state.searchResults,
	);

	// if user refresh the page and the store get erased, fetch the data again
	React.useEffect(() => {
		if (articles === undefined) {
			let searchText = pathname.split(':')[1];
			fetchSearchResults(searchText).then((data: SearchResponse) => {
				dispatch(ACTION.searchResults(data));
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		setSearchResults({ articles: articles, totalCount: totalCount });
	}, [articles, totalCount]);

	if (
		!searchResults.articles ||
		searchResults.articles === undefined
	) {
		<Spinner />;
	}

	// pagination logic
	const [page, setPage] = React.useState<number>(1);
	const [articlesPerPage, setArticlesPerPage] =
		React.useState<number>(10);

	const changeArticlesPerPageHandler = (
		event: React.ChangeEvent<{ value: unknown }>,
	) => setArticlesPerPage(Number(event.target.value));

	const calcNumbOfPages = React.useCallback(
		(numOfArticles: number): number => {
			return Math.ceil(numOfArticles / articlesPerPage);
		},
		[articlesPerPage],
	);

	const [pagesCount, setPagesCount] = React.useState<number>(
		!searchResults.articles || !searchResults.articles.length
			? 0
			: calcNumbOfPages(searchResults.articles.length),
	);
	React.useEffect(() => {
		if (searchResults.articles && searchResults.articles.length) {
			setPagesCount(calcNumbOfPages(searchResults.articles.length));
		}
	}, [calcNumbOfPages, searchResults]);

	const changePageHandler = (
		event: any,
		value: React.SetStateAction<number>,
	) => {
		console.log('typeof event: ', typeof event, 'event: ', event);
		setPage(value);
	};

	const pageContent = (array: ArticleDetails[]) => {
		if (array.length <= articlesPerPage) {
			return array;
		}
		const newArray = array.slice(
			page * articlesPerPage,
			page * articlesPerPage + articlesPerPage,
		);
		return newArray;
	};

	const onClickHandler = (id: Id) => {
		fetchArticleDetails(id).then((data: ChosenArticle) => {
			dispatch(ACTION.chosenArticle(data));
			history.push(`/article/:${id}`);
		});
	};

	const ResultsPagination = () => (
		<Pagination
			articlesPerPage={articlesPerPage}
			changeArticlesPerPageHandler={changeArticlesPerPageHandler}
			changePageHandler={changePageHandler}
			page={page}
			pagesCount={pagesCount}
		/>
	);

	return (
		<Container padding={true}>
			<p>Total count: {totalCount}</p>
			<ResultsPagination />
			<ResultsWrapper id="cardsContainer">
				{searchResults.articles &&
					searchResults.articles.length &&
					pageContent(searchResults.articles).map(
						(article: ArticleDetails) => (
							<ArticleCard
								key={article.id}
								type="searchResultsCard"
								className="searchResultsCard"
								onClick={() => onClickHandler(article.id)}
								{...article}
							/>
						),
					)}
			</ResultsWrapper>
			<ResultsPagination />
		</Container>
	);
};

export default SearchPage;
