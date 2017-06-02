import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Stores } from 'app/stores'
import App from 'app/containers/app'
import Home from 'app/components/home'

const history = syncHistoryWithStore(browserHistory, Stores)

export default () => (
  <Provider store={Stores}>
    <Router history={history}>

      <Route path={'/'} component={App}>

        <IndexRoute component={Home} />
        {/* <Route path={'/:date'} component={Calendar} /> */}
        <Route path={'/test'} component={Home} />

      </Route>

      {/* <Redirect from={'*'} to={'/'} /> */}

    </Router>
  </Provider>
)
