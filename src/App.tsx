import { FC } from 'react'
import {
  Switch, BrowserRouter, Route, Redirect
} from 'react-router-dom'

import JobDescriptionPage from './components/features/job-description-page/JobDescriptionPage'
import HomePage from './components/shared/home-page/HomePage'
import { Footer, Header } from './components/shared/index'
import { rootSaga } from './store/rootSaga'
import { sagaMiddleware } from './store/store'

import { INDEX_ROUTE, JOB_DESCRIPTION_ID_ROUTE } from './constants/routes'

import './App.scss'

const App: FC = () => {
  sagaMiddleware.run(rootSaga)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={INDEX_ROUTE} component={HomePage} />
          <Route
            exact
            path={JOB_DESCRIPTION_ID_ROUTE}
            component={JobDescriptionPage}
          />
          <Redirect to={INDEX_ROUTE} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
