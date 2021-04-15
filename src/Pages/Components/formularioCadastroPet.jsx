import React from 'react';

const FormularioCadastroPet = () => {
    return(
        <div className="home-inputs">
            <input className="cadastro-input-1" type="text" placeholder="Nome" />
            <input className="cadastro-input-2" type="text" placeholder="Idade" />
            <textarea className="cadastro-textarea" placeholder="Porque Adotar o Pet"></textarea>
        </div>
    )
}

export default FormularioCadastroPet;