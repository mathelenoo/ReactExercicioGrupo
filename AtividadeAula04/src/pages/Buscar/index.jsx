import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';

function BuscarUsuario() {
  const [id, setId] = useState("");
  const [pessoa, SetPessoa] = useState(null);
  const [buscado, setBuscado] = useState(false);

  const [pessoas, setPessoas] = useState([]);

  const fetchPessoas = async () => {
    try {
      const response = await axios.get(
        "https://6660f71163e6a0189fe80d14.mockapi.io/apiReact/v1/pessoa" //Mudar url pela sua api
      );
      setPessoas(response.data);
    } catch (error) {
      console.error("Erro ao buscar pessoas:", error);
    }
  };

  useEffect(() => {
    fetchPessoas();
  }, []);

  const searchPessoa = (id) => {
    const pessoaTemp = pessoas.find((p) => p.id === id);
    SetPessoa(pessoaTemp);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setBuscado(true);
    searchPessoa(id);
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <h1>Listar Pessoa por ID</h1>
        <div className="mb-3">
          <label className="form-label">ID da Pessoa:</label>
          <input
            type="number"
            className="form-control"
            id="idInput"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Buscar Pessoa
        </button>
      </form>

      {pessoa ? (
        <div id="dadosPessoa">
          <h2>Dados da Pessoa:</h2>
          <table className="table custom-table">
            <tbody>
              <tr>
                <th scope="row">Nome:</th>
                <td>{pessoa.name}</td>
              </tr>
              <tr>
                <th scope="row">Email:</th>
                <td>{pessoa.email}</td>
              </tr>
              <tr>
                <th scope="row">CPF:</th>
                <td>{pessoa.cpf}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        buscado && <p>ID não encontrado!</p>
      )}
    </div>
  );
}

export default BuscarUsuario;
