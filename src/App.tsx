import { FC } from 'react'
import {
  Switch, BrowserRouter, Route, Redirect
} from 'react-router-dom'

import JobDescriptionPage from './common/components/job-description-page/JobDescriptionPage'
import HomePage from './common/components/home-page/HomePage'
import { Footer, Header } from './common/components'
import { rootSaga } from './store/rootSaga'
import { sagaMiddleware } from './store/store'

import './App.scss'

const App: FC = () => {
  sagaMiddleware.run(rootSaga)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/:id"
            component={JobDescriptionPage}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
