import React from 'react';
import './cadastroPet.css';
import imagem from '../../Imagens/animalCadastroPet.svg'
import Formulario from '../Components/formularioCadastroPet'
import {Link} from "react-router-dom"

function CadastroPet(){
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
                                    Cadastro PET
                                </label>
                                <label className="cadastro-label-bem-vindo">
                                        Insira as informações do pet
                                </label>
                                <Formulario>
                                    
                                </Formulario>
                                
                            </div>
                            
                            <div className="cadastro-parte-baixo">
                                <Link  className="cadastro-button" to="/cadastroPet2">
                                    <button >Continuar</button>
                                </Link>
                                <Link className="cadastro-label-voltar" to="/listapet">voltar</Link>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default CadastroPet