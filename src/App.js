import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './Components/Header/Header'

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

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/succulents" component={Succulents} />
          <Route path="/florals" component={Florals} />
          <Route path="/palms" component={Palms} />
          <Route path="/cacti" component={Cacti} />
          <Route path="/pothos" component={Pothos} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
