import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Gaus from './pages/gaus'
import Jacobi from './pages/jacobi'
import Seidel from './pages/seidel'
import Lagrange from './pages/lagrange'
import home from './pages/home'

function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/"   exact component={home}></Route>
        <Route path="/projetofinal/gaus" component={Gaus}></Route>
        <Route path="/projetofinal/seidel" component={Seidel}></Route>
        <Route path="/projetofinal/jacobi" component={Jacobi}></Route>
        <Route path="/projetofinal/Lagrange" component={Lagrange}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
