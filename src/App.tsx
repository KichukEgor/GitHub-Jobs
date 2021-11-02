import {
  FC, useCallback, useEffect, useState
} from 'react'
import {
  Switch, BrowserRouter, Route, Redirect
} from 'react-router-dom'

import JobDescriptionPage from './features/job-description-page/JobDescriptionPage'
import HomePage from './features/home-page/HomePage'
import { Footer, Header } from './common/components'
import { rootSaga } from './store/rootSaga'
import { sagaMiddleware } from './store/store'

import './App.scss'

const App: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)

  const isVisible = useCallback(
    () => setIsModalVisible((prevState) => !prevState),
    []
  )
  sagaMiddleware.run(rootSaga)

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflowX = 'hidden'
      document.body.style.overflow = 'visible'
    } else document.body.style.overflow = 'hidden'
  }, [isModalVisible])

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
