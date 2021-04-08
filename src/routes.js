import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/index'
import Cadastro from './Pages/Cadastro/cadastro'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro" component={Cadastro} />
        </Switch>
    </BrowserRouter>
);

export default Routes;