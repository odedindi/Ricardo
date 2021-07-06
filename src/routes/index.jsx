// ====================== react ===========================
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// ==================== components ========================
import Spinner from '../components/Spinner';
const Container = lazy(() => import('../components/Layout/Container'));
const Logo = lazy(() => import('../components/Logo'));
// ======================= pages ==========================
const HomePage = lazy(() => import('../pages/home'));
const SearchPage = lazy(() => import('../pages/search'));
const ProductDetailsPage = lazy(() => import('../pages/productDetails'));
// ========================================================

const Routes = () => (
    <Router>
        <Suspense 
            fallback={ <Spinner/> }
        >
            <Container>
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
                        render={ () => 
                            <Redirect to={{ pathname: '/' }}/> 
                        }
                    />
                </Switch>
            </Container>
        </Suspense>
    </Router>
)

export default Routes;
