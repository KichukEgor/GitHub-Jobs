import { FC } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { sagaMiddleware } from './store/store';
import HomePage from './components/shared/home-page/HomePage';
import JobDescriptionPage from './components/features/job-description-page/JobDescriptionPage';
import { Footer, Header } from './components/shared/index';
import { rootSaga } from './store/rootSaga';

import {
    INDEX_ROUTE,
    JOB_DESCRIPTION_ID_ROUTE
} from './constants/routes'

import './App.scss'


const App: FC = () => {

    sagaMiddleware.run(rootSaga)

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <main>
                    <Switch>
                        <Route exact path={INDEX_ROUTE} component={HomePage}/>
                        <Route exact path={JOB_DESCRIPTION_ID_ROUTE} component={JobDescriptionPage}/>
                        <Redirect to={INDEX_ROUTE}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
