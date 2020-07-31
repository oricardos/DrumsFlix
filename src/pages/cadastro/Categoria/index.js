import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormFild from '../../../components/FormFild'

function CadastroCategoria() {

    const valoresIniciais = {
        nome: ' ',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais)

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infos) {
        const { getAttribute, value } = infos.target
        setValue(
            getAttribute('name'),
            value
        )
    }

    return (
        <PageDefault>
            <h1>Cadastrar Categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infos) {
                infos.preventDefault()
                setCategorias([
                    ...categorias,
                    values
                ])

                setValues(valoresIniciais)
            }}>
                <FormFild
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}

                />

                <FormFild
                    label="Descrição"
                    type=""
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}

                />

                {/* <div>
                    <label>
                        Descrição

                        <textarea type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange} 
                        />
                    </label>
                </div> */}
                    <FormFild
                        label="Cor"
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange={handleChange}

                    />

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
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