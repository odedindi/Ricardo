// ======================== react =========================
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// ======================== styles ========================
import { ResultsWrapper } from '../styles/wrappers';
import Pagination from '@material-ui/lab/Pagination';
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

	const [searchResults, setSearchResults] = useState<
		ArticleDetails[]
	>([]);
	useEffect(() => {
		setSearchResults(articles);
	}, [articles]);

	const [page, setPage] = useState<number>(1);
	const [pageSize] = useState<number>(10);
	const calcNumbOfPages = (numOfArticles: number) =>
		Math.ceil(numOfArticles / 10);
	const [pagesCount, setPagesCount] = useState<number>(
		calcNumbOfPages(totalCount),
	);
	useEffect(() => {
		setPagesCount(calcNumbOfPages(totalCount));
	}, [totalCount]);

	if (!searchResults) {
		return <NoKnownDataGoToHome />;
	}

	const handleChange = (
		event: any,
		value: React.SetStateAction<number>,
	) => {
		console.log('typeof event: ', typeof event, 'event: ', event);
		setPage(value);
	};

	const pageContent = (array: ArticleDetails[]) =>
		array.length <= pageSize
			? array
			: array.slice(page * pageSize, page * pageSize + pageSize);

	const onClickHandler = (id: Id) => {
		fetchArticleDetails(id).then((data: ChosenArticle) => {
			dispatch(ACTION.chosenArticle(data));
			history.push(`/article/:${id}`);
		});
	};

	return (
		<Container padding={true}>
			<p>Total count: {totalCount}</p>
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
			{pagesCount > 1 && (
				<Pagination
					count={pagesCount}
					page={page}
					onChange={handleChange}
				/>
			)}
		</Container>
	);
};

export default SearchPage;
