import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Admin from './admin'
import App from './App'
import Login from './pages/login'
import NoMatch from './pages/nomatch'
import table from './pages/table/basicTable'
import Button from './pages/ui/button'

export default class Router extends React.Component {
  render () {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() =>
            <Admin>
              <Route path="/admin/ui/button" component={Button} />
              <Route path="/admin/table/basic" component={table} />
              <Route component={NoMatch} />
            </Admin>
          } />
          <Route path="/order/detail" comasponent={Login} />
        </App>
      </HashRouter>
    )
  }
}