import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/index'
import Cadastro from './Pages/Cadastro/cadastro'
import Cadastro2 from './Pages/Cadastro/cadastro2'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/cadastro2" component={Cadastro2} />
        </Switch>
    </BrowserRouter>
);

export default Routes;