import React from 'react';
import './DadosPet.css';
import imagem from '../../Imagens/animal1.svg'
import Formulario from '../Components/formulaListaPet'
import {Link} from "react-router-dom"



function ListaPet(){
    return(
        <div className="listapet-body">
                <div className="listapet-parte-cima-direita">
                    <Link  className="listapet-button" to="/cadastropet">
                                <button className="listapet-button-1"  >Cadastre um Pet</button>
                    </Link>
                    <Link  className="listapet-button" to="/listapet">
                                <button className="listapet-button-2" >Sair</button>
                    </Link>
                </div>
                <div className="listapet-parte-cima">
                    <img src={imagem} alt="" width="20%" height="20%"/>
                    <Formulario> </Formulario>
                </div>
        </div>
            
    );
}



export default ListaPet;