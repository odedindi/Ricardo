// ======================== react =========================
import React, { useCallback, useEffect, useState } from 'react';
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
import Pagination from '../components/SearchResultsPagination';
// ========================================================

const SearchPage: React.FC = () => {
	const history = useHistory();
	const [state, dispatch]: Store = useStore();
	const { articles, totalCount }: any = state.searchResults;

	const [searchResults, setSearchResults] = useState<
		ArticleDetails[]
	>([]);
	useEffect(() => {
		setSearchResults(articles);
	}, [articles]);

	const [page, setPage] = useState<number>(1);
	const [articlesPerPage, setArticlesPerPage] = useState<number>(10);
	const changeArticlesPerPageHandler = (
		event: React.ChangeEvent<{ value: unknown }>,
	) => setArticlesPerPage(Number(event.target.value));

	const calcNumbOfPages = useCallback(
		(numOfArticles: number): number => {
			return Math.ceil(numOfArticles / articlesPerPage);
		},
		[articlesPerPage],
	);

	const [pagesCount, setPagesCount] = useState<number>(
		calcNumbOfPages(totalCount),
	);
	useEffect(() => {
		setPagesCount(calcNumbOfPages(totalCount));
	}, [calcNumbOfPages, totalCount]);

	if (!searchResults) {
		return <NoKnownDataGoToHome />;
	}

	const changePageHandler = (
		event: any,
		value: React.SetStateAction<number>,
	) => {
		console.log('typeof event: ', typeof event, 'event: ', event);
		setPage(value);
	};

	const pageContent = (array: ArticleDetails[]) =>
		array.length <= articlesPerPage
			? array
			: array.slice(
					page * articlesPerPage,
					page * articlesPerPage + articlesPerPage,
			  );

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
			<ResultsPagination/>
			<ResultsWrapper>
				{pageContent(searchResults).map((article: ArticleDetails) => (
					<ArticleCard
						key={article.id}
						type="searchResultsCard"
						onClick={() => onClickHandler(article.id)}
						{...article}
					/>
				))}
			</ResultsWrapper>
			<ResultsPagination/>
		</Container>
	);
};

export default SearchPage;
