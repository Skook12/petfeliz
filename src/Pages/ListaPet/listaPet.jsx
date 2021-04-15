import React from 'react';
import './listaPet.css';
import imagem from '../../Imagens/animal1.svg'
import Formulario from '../Components/formulaListaPet'
import {Link} from "react-router-dom"

const lista = [
    {
        img: "https://static.pokemonpets.com/images/monsters-images-300-300/393-Piplup.png",
        nome: "Piplup",
        tipo: "Pinguim"
    },

    {
        img: "https://i.pinimg.com/originals/9f/36/23/9f362382b5883d8bcbf52c9f02c8b808.png",
        nome: "Chimchar",
        tipo: "Macaco"
    },

    {
        img: "http://static.pokemonpets.com/images/monsters-images-800-800/387-Turtwig.png",
        nome: "Turtwig",
        tipo: "Tartaruga"
    }
]


function ListaPet(){
    return(
        <div className="listapet-body">
                <div className="listapet-parte-cima-direita">
                    <Link  className="listapet-button" to="/cadastropet">
                                <button className="listapet-button-1"  >Cadastre um Pet</button>
                    </Link>
                    <Link  className="listapet-button" to="/home">
                                <button className="listapet-button-2" >Sair</button>
                    </Link>
                </div>
                <div className="listapet-parte-cima">
                    <img src={imagem} alt="" width="20%" height="20%"/>
                    <Formulario> </Formulario>
                    <div className="ListPet">
                        {lista.map((valor,index)=>{
                            return (
                                <div className="ListaPetOrganizar" key={index}>
                                    <img className="ImagePet" src={valor.img} alt="Imagem do Pet" width="10%" height="10%"/>
                                    <div className="ListaPetTexto">
                                        <Link className="NomePet" to="/dadospet">{valor.nome}</Link>
                                        <h3>{valor.tipo}</h3>
                                    </div>
                                        
                                </div>
                            )
                        })}
                    </div>
                </div>
        </div>
            
    );
}



export default ListaPet;