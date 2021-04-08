import React from 'react';
import './home.css';
import imagem from '../../Imagens/animal1.svg'
import Formulario from '../Components/formulario'
import bolaAmarela from '../../Imagens/BolaAmarela.svg'
import bolaVerdeEscura from '../../Imagens/BolaVerdeEscura.svg'
import bolaAzul from '../../Imagens/BolaAzul.svg'
import bolaPreta from '../../Imagens/BolaPreta.svg'
import bolaMarron from '../../Imagens/BolaMarron.svg'
import {Link} from "react-router-dom"

function Home(){
    return(
        <div className="home-body">
            <div className = "tela">
                <div>
                <div className="BoxPrincipal">
                    <div className="ParteEsquerda">
                        <img src={imagem} alt="" width="98%" height="98%"/>
                    </div>

                    <div className="ParteDireita">
                        <div className="ParteDireitaInterna">
                            
                            <div className="home-titulo">
                                <label className="home-label-login">
                                    Login
                                </label>
                                <label className="home-label-bem-vindo">
                                        Bem Vindo!!
                                </label>
                                <Formulario>
                                    
                                </Formulario>
                                
                            </div>
                            
                            <div className="home-parte-baixo">
                            <Link  className="home-button" to="/">
                                    <button >Login</button>
                                </Link>
                                <Link className="home-label-cadastro" to="/cadastro">Cadastre-se</Link>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;