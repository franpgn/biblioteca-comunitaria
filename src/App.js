import logo from './logo.svg';
import { supabase } from './supabase';
import './App.css';

function App() {
  /*Importando o cliente do Supabase
    const handleInsertUser = async () => {
      // Exemplo de dados que você pode querer inserir
      const usuario = {
        nome: 'Fulano',
        sobrenome: 'Silva',
        email: 'fulano2@teste.com',
        celular: '99999-9999',
        endereco: 'Rua das Flores, 123',
      };

      // Inserindo no Supabase
      const { data, error } = await supabase
        .from('usuarios')
        .insert([usuario]); 
        // Você pode inserir vários registros ao mesmo tempo usando um array
        // com múltiplos objetos.

      if (error) {
        console.error('Erro ao inserir:', error.message);
      } else {
        console.log('Usuário inserido com sucesso:', data);
      }
    };

    return (
      <div>
        <h1>Inserindo Usuário na Tabela "usuarios"</h1>
        <button onClick={handleInsertUser}>Inserir Usuário</button>
      </div>
    );
  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
