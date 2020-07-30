import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria() {

    const [categorias, setCategorias] = useState(['teste'])

    const valoresIniciais = {
        nome: 'Nome ',
        descricao: 'Descrição',
        cor: '#0e0cec'
    }
    const [values, setValues] = useState(valoresIniciais)
    
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infos) {
        setValue(
            infos.target.getAttribute('name'),
            infos.target.value)
    }

    return (
        <PageDefault>
            <h1>Cadastrar Categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infos) {
                infos.preventDefault()
                setCategorias([
                    ...categorias,
                    values.nome
                ])
            }}>
                <div>
                    <label>
                        Nome da Categoria

                    <input type="text"
                            value={values.nome}
                            name="nome"
                            onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição

                        <textarea type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Cor

                        <input type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange} />
                    </label>
                </div>

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Voltar para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria