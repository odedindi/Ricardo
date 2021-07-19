// ======================== react =========================
import * as React from 'react';
import { useHistory } from 'react-router-dom';
// ======================== styles ========================
import { ResultsWrapper } from '../styles/wrappers';
// ======================= fetches ========================
import useFetch from '../helpers/useFetch';
// ====================== components ======================
import ArticleCard from '../components/ArticleCard';
import Container from '../components/Layout/Container';
import Spinner from '../components/Spinner';
// ========================================================

const SearchPage = () => {
	const history = useHistory();
	const [isLoading, data] = useFetch();

	const onClickHandler = (id) => history.push(`/article/:${id}`);

	return (
		<Container padding={true}>
			<p>Total count: {isLoading ? 0 : data.totalCount}</p>
			<ResultsWrapper>
				{isLoading ? (
					<Spinner />
				) : (
					data.articles.map((article) => (
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
