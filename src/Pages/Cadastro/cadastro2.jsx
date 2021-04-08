import React from 'react';
import './cadastro.css';
import imagem from '../../Imagens/AnimalCadastro.svg'
import Formulario from '../Components/formularioCadastro2'
import {Link} from "react-router-dom"

function Cadastro2(){
    return(
        <div className="cadastro-body">
            <div className = "tela">
                <div>
                <div className="BoxPrincipal">
                    <div className="ParteEsquerda">
                        <img src={imagem} alt="" width="98%" height="98%"/>
                    </div>

                    <div className="ParteDireita">
                        <div className="ParteDireitaInterna">
                            
                            <div className="cadastro-titulo">
                                <label className="cadastro-label-login">
                                    Cadastro
                                </label>
                                <label className="cadastro-label-bem-vindo">
                                        Insira suas informações
                                </label>
                                <Formulario>
                                    
                                </Formulario>
                                
                            </div>
                            
                            <div className="cadastro-parte-baixo">
                                <Link  className="cadastro-button" to="/home">
                                    <button >Cadastro</button>
                                </Link>
                                <Link className="cadastro-label-voltar" to="/cadastro">voltar</Link>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default Cadastro2