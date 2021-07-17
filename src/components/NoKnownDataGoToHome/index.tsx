// ========================= react =========================
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
// =========================================================

const NoKnownDataGoToHome: React.FC = () => {
	const history = useHistory();

	React.useEffect(() => {
		setTimeout(() => {
			history.push('/');
		}, 5000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h2>Sorry but an unexpected error has occurred.</h2>
			<p>
				You shall be redirected back to the home page within few
				seconds
			</p>
			<p>
				otherwise please press <Link to="/">here</Link>
			</p>
		</>
	);
};

export default NoKnownDataGoToHome;
