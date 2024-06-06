import React, { useState, useEffect } from "react"; // react, hooks ger est e efeit do componente
import axios from 'axios'; //biblioteca utilizada para requisições HTTP da MockAPI;

function Formulario() { //declaração do componente

  // Abaixo está a declaração de todos os nossos estados
  const [name, setName] = useState(''); //tipo de variavel const
  const [cpf, setCpf] = useState(''); //setFuncao - vai atualizar nossos estados e renderizar o novo valor
  const [email, setEmail] = useState(''); //useState hook
  const [pessoas, setPessoas] = useState([]);

  //Função para Buscar Pessoas

  const fetchPessoas = async () => { //fetch utiliza uma função GET p/ nossa API
    try {
      const response = await axios.get('https://6660f71163e6a0189fe80d14.mockapi.io/apiReact/v1/pessoa');
      setPessoas(response.data);
    } catch (error) {
      console.error("Erro ao buscar pessoas:", error);
    }
  };

  useEffect(() => { //aqui o useEffetct vai chamar a funcao fetchPessoas
    fetchPessoas();
  }, []);


  //Funçãoo para manusear o envio do formulario

  const handleSubmit = async (e) => {
    e.preventDefault(); //evita recarregar a pag, se desativar atualiza mas n add

    const newPessoa = { name, cpf, email }; //aqui criamos um novo obj de Pessoa p nossa API
    try {
      //aqui em baixo estamos fazendo uma requisição POST c o amigo axios, para add uma nova pessoa
      await axios.post('https://6660f71163e6a0189fe80d14.mockapi.io/apiReact/v1/pessoa', newPessoa);
      fetchPessoas(); //se for bem sucedida nosso POST, atualizamos a lista de pessoas
    } catch (error) {
      console.error("Erro ao adicionar pessoa:", error); //se der erro, vai pro console
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF</label>
          <input 
            type="text" 
            className="form-control" 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar</button>
      </form>
      <ul className="list-group mt-3">
        {pessoas.map((pessoa) => (
          <li key={pessoa.id} className="list-group-item">
            {pessoa.name} - {pessoa.cpf} - {pessoa.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Formulario;
