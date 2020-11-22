import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from "./Components/Homepage/Homepage"
import Login from "./Components/Login/Login"
import signUp from "./Components/SignUp/signUp"

export default (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={signUp} />
    </Switch>
  )