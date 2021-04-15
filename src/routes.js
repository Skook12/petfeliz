import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/index'
import Cadastro from './Pages/Cadastro/cadastro'
import Cadastro2 from './Pages/Cadastro/cadastro2'
import ListaPet from './Pages/ListaPet/listaPet'
import CadastroPet from './Pages/CadastroPet/cadastroPet'
import CadastroPet2 from './Pages/CadastroPet/cadastroPet2'
import DadosPet from './Pages/DadosPet/DadosPet'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/cadastro2" component={Cadastro2} />
            <Route exact path="/listapet" component={ListaPet} />
            <Route exact path="/cadastropet" component={CadastroPet} />
            <Route exact path="/cadastropet2" component={CadastroPet2} />
            <Route exact path="/dadospet" component={DadosPet} />
        </Switch>
    </BrowserRouter>
);

export default Routes;