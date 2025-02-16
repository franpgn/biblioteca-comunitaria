import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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

    
      <main className="flex-1 flex justify-center items-center p-4">
        <div className="border-2 rounded-2xl p-10 w-[500px] bg-[#bdad80]">
          <h2 className="text-2xl font-bold text-black mb-4">Cadastro de Livro:</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="titulo">Título:</label>
              <input
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                type="text"
                id="titulo"
                name="titulo"
                value={livro.titulo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 " htmlFor="autor">Autor:</label>
              <input
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                type="text"
                id="autor"
                name="autor"
                value={livro.autor}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 " htmlFor="genero">Gênero:</label>
              <input
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                type="text"
                id="genero"
                name="genero"
                value={livro.genero}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 " htmlFor="ano">Ano:</label>
              <input
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                type="number"
                id="ano"
                name="ano"
                value={livro.ano}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2 " htmlFor="paginas">Número de Páginas:</label>
              <input
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#01764C] text-sm font-sans"
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
                className="mt-4 bg-[#01764C] border-none text-white px-4 py-2 rounded-md hover:bg-[#015a3a] transition duration-300 ease-in-out  text-sm"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CadastroPage;