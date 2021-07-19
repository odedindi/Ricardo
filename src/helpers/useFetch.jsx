import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { fetchArticleDetails, fetchSearchResults } from './fetches'


const useFetch = () => {

    let { pathname } = useLocation();

	const queryType = pathname.split('/')[1];
	const query = pathname.split(':')[1];

    const [data, setData] = React.useState({});
	const [isLoading, setIsLoading] = React.useState(true);


	React.useEffect(() => {
		if (!query) return;

        if (queryType === 'search') {
            fetchSearchResults(query).then((data) => setData(data));
        }
        if (queryType === 'article') {
            fetchArticleDetails(query).then((data) => setData(data));
        }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    React.useEffect(() => {
		Object.entries(data).length > 0
			? setIsLoading(false)
			: setIsLoading(true);
	}, [data]);

    return [isLoading, data];
};

export default useFetch;