import React from 'react';

const FormularioCadastro = () => {
    return(
        <div className="home-inputs">
            <input className="cadastro-input-1"  type="text" placeholder="Nome" />
            <input className="cadastro-input-2"  type="text" placeholder="Sobrenome" />
            <input className="cadastro-input-3"  type="text" placeholder="Data de Nascimento"/>
        </div>
    )
}

export default FormularioCadastro;