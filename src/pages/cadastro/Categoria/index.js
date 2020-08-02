import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: ' ',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infos) {
    setValue(
      infos.target.getAttribute('name'),
      infos.target.value,
    );
  }

  useEffect(() => {
    console.log('funfou');
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([...response]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front-end',
    //       descricao: 'Conteúdos front-end',
    //       cor: '#6bd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back-end',
    //       descricao: 'Conteúdos back-end',
    //       cor: '#cc3333',
    //     },
    //   ]);
    // }, 2000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastrar Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
