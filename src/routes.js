import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Homepage from "./Components/Homepage/Homepage"
import Login from "./Components/Login/Login"
import signUp from "./Components/SignUp/signUp"
import About from "./Components/About/About"
import Shop from "./Components/Shop/Shop"
import Cart from "./Components/Cart/Cart"

import Succulents from "./Components/Plants/Succulents/Succulents"
import Florals from "./Components/Plants/Florals/Florals"

export default function Routes() {
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={signUp} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="/succulents" component={Succulents} />
      <Route path="/florals" component={Florals} />
    </Switch>
  </Router>
}