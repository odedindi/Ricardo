// ====================== react ===========================
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// ====================== styles ==========================
import { SpinnerWrapper } from './style';
import CircularProgress from '@material-ui/core/CircularProgress';
// ======================= pages ==========================
const HomePage = lazy(() => import('../pages/home'));
const SearchPage = lazy(() => import('../pages/search'));
const ProductDetailsPage = lazy(() => import('../pages/productDetails'));
// ========================================================
const Routes = () => (
    
    <Router>
        <Suspense 
            fallback={ 
                <SpinnerWrapper>
                    <CircularProgress/>
                </SpinnerWrapper>
            }
        >
            <Switch>
                <Route exact path='/' component={ HomePage }/>
                <Route path='/search/:searchText' component={ SearchPage }/>
                <Route path='/article/:articleId' component={ ProductDetailsPage }/>
                <Route render={ () => <Redirect to={{ pathname: '/' }}/> }/>
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;
