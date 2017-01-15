import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { ServerRoute } from 'react-project'
import hello from './api/hello'
import App from './components/App'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import SettingsPage from './components/SettingsPage'
import NextPickUp from './components/NextPickUp'
import Thanks from './components/Thanks'
import DonorSignUp from './components/DonorSignUp'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="login/:type" component={Login} />
      <Route path="signup" component={SignUp} />
      <Route path="settings" component={SettingsPage} />
      <Route path="nextPickUp" component={NextPickUp} />
      <Route path="thanks" component={Thanks} />
      <Route path="donorsignup" component={DonorSignUp} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
