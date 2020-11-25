import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './Components/Header/Header'
import SubHeader from './Components/Header/SubHeader'

import Homepage from './Components/Homepage/Homepage'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import About from './Components/About/About'
import Shop from './Components/Shop/Shop'
import Cart from './Components/Cart/Cart'

import Succulents from './Components/Plants/Succulents/Succulents'
import Florals from './Components/Plants/Florals/Florals'
import Palms from './Components/Plants/Palms/Palms'
import Cacti from './Components/Plants/Cacti/Cacti'
import Pothos from './Components/Plants/Pothos/Pothos'

import PrivateRoute from './Components/HOCS/PrivateRoute'
import PublicRoute from './Components/HOCS/PublicRoute'

import Profile from './Components/Account/Profile'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SubHeader />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/registration" component={Registration} />
          <PublicRoute path="/about" component={About} />
          <PublicRoute path="/shop" component={Shop} />
          <PublicRoute path="/cart" component={Cart} />
          <PublicRoute path="/succulents" component={Succulents} />
          <PublicRoute path="/florals" component={Florals} />
          <PublicRoute path="/palms" component={Palms} />
          <PublicRoute path="/cacti" component={Cacti} />
          <PublicRoute path="/pothos" component={Pothos} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
