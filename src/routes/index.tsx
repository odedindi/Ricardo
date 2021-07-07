// ====================== react ===========================
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// ==================== components ========================
import Spinner from '../components/Spinner';
const Container = lazy(() => import('../components/Layout/Container'));
const Logo = lazy(() => import('../components/Logo'));
// ======================= pages ==========================
const HomePage = lazy(() => import('../pages/home'))
const SearchPage = lazy(() => import('../pages/searchResults'));
const ProductDetailsPage = lazy(() => import('../pages/productDetails'));
// ========================================================

const Routes: React.FC = () => (
    <Router>
        <Suspense fallback={ <Spinner/> }>
            <Container padding={ false }>
                <Logo/>
                <Switch>
                    <Route 
                        exact 
                        path='/' 
                        component={ HomePage }
                    />
                    <Route 
                        path='/search/:searchText' 
                        component={ SearchPage }
                    />
                    <Route 
                        path='/article/:articleId' 
                        component={ ProductDetailsPage }
                    />
                    <Route 
                        render={ () => <Redirect to={{ pathname: '/' }}/> }
                    />
                </Switch>
            </Container>
        </Suspense>
    </Router>
);

export default Routes;
