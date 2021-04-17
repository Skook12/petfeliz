import React from 'react';
import './DadosPet.css';
import {Link} from "react-router-dom"



function DadosPet(){
    return(
        <div className="dadospet-body">
                
                <div className="dadospet-parte-cima">
                    <div className="dadospet-imagem">
                        <img src="https://fauufpa.files.wordpress.com/2010/05/quadrado-branco-e1536648173108.jpg?w=200" alt="" width="20%" height="20%"/>
                    </div>
                    <div className="dadospet-NomeTipo">
                            <h1 className="dadospet-nome">Nome do animal</h1>
                        <div className="dadaospet-texto-tipo">
                            <h2>Raça:&nbsp;</h2>
                            <label className="dadospet-normal">Cachorro</label>
                            <h2> &nbsp;|&nbsp; </h2>
                            <h2>Tipo:&nbsp;</h2>
                            <label className="dadospet-normal">23</label>
                            <h2> &nbsp;|&nbsp; </h2>
                            <h2>Idade:&nbsp;</h2>
                            <label className="dadospet-normal">Cachorro</label>

                        </div>
                    </div>
                </div>
                <div className="dadospet-parte-baixo-direita">
                    <Link  className="dadospet-button" to="/cadastropet">
                                <button className="dadospet-button-1"  >Cadastre um Pet</button>
                    </Link>
                    <Link  className="dadospet-button" to="/home">
                                <button className="dadospet-button-2" >Sair</button>
                    </Link>
                </div>
                <div className="dadospet-parte-baixo">
                    <h1 className="dadospet-parte-baixo-titulo">Porque Adotar</h1>
                    <p className="dadospet-parte-baixo-paragrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quia cum quaerat adipisci, ullam numquam laudantium expedita tempora unde sit consequatur quibusdam quasi aperiam repellat, veniam dolorum dignissimos quidem ratione.</p>
                    <h1 className="dadospet-parte-baixo-titulo">Historico</h1>
                    <p className="dadospet-parte-baixo-paragrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laborum deserunt praesentium delectus laudantium harum maxime autem doloribus aperiam aut, sit molestias totam. Fugiat rerum blanditiis nemo ex nesciunt nulla.</p>
                    <Link  className="dadospet-button2" to="/listapet">
                            <button >Voltar</button>
                    </Link>
                </div>
        </div>
            
    );
}



export default DadosPet;