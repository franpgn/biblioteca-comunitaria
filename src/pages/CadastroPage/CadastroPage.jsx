import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import imagem from "../../assets/Inteira1.png";

const CadastroPage = () => {
  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    genero: '',
    ano: '',
    paginas: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro({ ...livro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Livro cadastrado:', livro);
    alert('Livro cadastrado com sucesso!');
    setLivro({
      titulo: '',
      autor: '',
      genero: '',
      ano: '',
      paginas: ''
    });
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

    
      <main className="flex-1 flex justify-center items-center p-4 bg-white">
        <div className="border-2 border-black rounded-2xl p-6 w-[700px] bg-[rgba(255,_240,_215,_1)]">
          <h2 className="text-2xl font-bold text-black mb-4 font-sans">Cadastro de Livro:</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 font-sans" htmlFor="titulo">Título:</label>
              <input
                className="w-full p-2 border-2 border-black rounded-lg font-sans"
                type="text"
                id="titulo"
                name="titulo"
                value={livro.titulo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 font-sans" htmlFor="autor">Autor:</label>
              <input
                className="w-full p-2 border-2 border-black rounded-lg font-sans"
                type="text"
                id="autor"
                name="autor"
                value={livro.autor}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 font-sans" htmlFor="genero">Gênero:</label>
              <input
                className="w-full p-2 border-2 border-black rounded-lg font-sans"
                type="text"
                id="genero"
                name="genero"
                value={livro.genero}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 font-sans" htmlFor="ano">Ano:</label>
              <input
                className="w-full p-2 border-2 border-black rounded-lg font-sans"
                type="number"
                id="ano"
                name="ano"
                value={livro.ano}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 font-sans" htmlFor="paginas">Número de Páginas:</label>
              <input
                className="w-full p-2 border-2 border-black rounded-lg font-sans"
                type="number"
                id="paginas"
                name="paginas"
                value={livro.paginas}
                onChange={handleChange}
                required
              />
            </div>
        
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="transition duration-300 hover:bg-[#01764C] hover:text-white rounded-lg py-2 px-6 text-lg w-32 border-2 border-black font-sans"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[rgba(255,_240,_215,_1)] p-4 flex justify-center">
        <img 
          src={imagem}
          alt="Footer Logo" 
          className="w-40 h-auto"
        />
      </footer>
    </div>
  );
};

export default CadastroPage;