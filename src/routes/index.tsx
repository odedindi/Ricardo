// ====================== react ===========================
import * as React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
// ==================== components ========================
import Spinner from '../components/Spinner';
const Container = React.lazy(
	() => import('../components/Layout/Container'),
);
const Logo = React.lazy(() => import('../components/Logo'));
// ======================= pages ==========================
const HomePage = React.lazy(() => import('../pages/home'));
const SearchPage = React.lazy(() => import('../pages/searchPage'));
const ProductDetailsPage = React.lazy(
	() => import('../pages/productDetails'),
);
// ========================================================

const Routes: React.FC = () => (
	<Router>
		<React.Suspense fallback={<Spinner />}>
			<Container padding={false}>
				<Logo />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/search/:searchText" component={SearchPage} />
					<Route
						path="/article/:articleId"
						component={ProductDetailsPage}
					/>
					<Route render={() => <Redirect to={{ pathname: '/' }} />} />
				</Switch>
			</Container>
		</React.Suspense>
	</Router>
);

export default Routes;
