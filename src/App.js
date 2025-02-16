import { supabase } from './supabase';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import BookListPage from './pages/BookListPage/BookListPage';
import CadastroPage from './pages/CadastroPage/CadastroPage';



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
    <Router>
            <Routes>
              <Route path="/" Component={LandingPage}/>
              <Route path="/booklist" Component={BookListPage}/>
              <Route path="/cadastroPage" Component={CadastroPage}/>
            </Routes>
    </Router>
  );
}

export default App;
