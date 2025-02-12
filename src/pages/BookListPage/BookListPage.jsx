import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const BookListPage = () => {
  const list = [
    {
      id: 1,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 2,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 1,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 4,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 5,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 6,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 7,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 8,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 9,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 10,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },
    
    {
      id: 11,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 12,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 13,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 14,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 15,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

    {
      id: 16,
      title: "O Pequeno Príncipe",
      authors: "Antoine de Saint-Exupéry",
      publisher: "Agir",
      publishedDate: "1943",
      thumbnail: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/04/05/01-o-pequeno-principe-70-anos-reproducao.jpg",
    },

  ];

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Barra de pesquisa  */}
      <div className="w-full flex justify-center mt-4">
        <div className="w-full max-w-3xl">
          {/* Contêiner flexível para a barra de pesquisa, texto e botão */}
<div className="flex items-center gap-4">
  {/* Barra de pesquisa com ícone */}
  <div className="relative flex-1"> {/* Use flex-1 para ocupar o espaço disponível */}
    <input
      type="text"
      placeholder="Pesquisar..."
      className="w-80 pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#01764C] text-sm font-sans"
    />
    <svg
      className="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  </div>

  {/* Texto "ORDENAR POR" */}
  <span className="text-base font-bold text-black font-sans whitespace-nowrap flex-shrink-0">ORDENAR POR:</span> {/* Adicione flex-shrink-0 para evitar que o texto seja comprimido */}

  {/* Botão circular de filtro */}
  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#01764C] text-white focus:outline-none flex-shrink-0">
    <span className="text-sm font-sans">Mais lidos</span>
    <ChevronDownIcon className="h-4 w-4" />
  </button>
</div>
          {/* Linha preta que começa na barra de pesquisa e termina no botão verde */}
          <div className="w-full h-px bg-black mt-2"></div>
        </div>
      </div>

      {/* Espaço entre a barra de pesquisa e o conteúdo abaixo */}
      <div className="mt-8"></div>

      {/* Retângulo cinza claro na vertical */}
      <div className="flex flex-1">
        {/* Aside (menu lateral) */}
        <aside className="w-64 ml-5 flex flex-col">
          {/* Div que contém as seções com fundo cinza */}
          <div className="bg-gray-100 p-4 rounded-lg space-y-4">
            {/* Seção: Autor */}
            <div className="bg-[rgba(255,_240,_215,_1)] p-3 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-black mb-1 font-sans">Autor</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar autor..."
                  className="w-70 pl-8 pr-3 py-1 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                />
                <svg
                  className="absolute left-2 top-2 h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Seção: Editora */}
            <div className="bg-[rgba(255,_240,_215,_1)] p-3 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-black mb-1 font-sans">Editora</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar editora..."
                  className="w-70 pl-8 pr-3 py-1 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                />
                <svg
                  className="absolute left-2 top-2 h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Seção: Gênero */}
            <div className="bg-[rgba(255,_240,_215,_1)] p-3 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-black mb-1 font-sans">Gênero</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar gênero..."
                  className="w-70 pl-8 pr-3 py-1 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                />
                <svg
                  className="absolute left-2 top-2 h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Seção: Categoria */}
            <div className="bg-[rgba(255,_240,_215,_1)] p-3 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-black mb-1 font-sans">Categoria</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar categoria..."
                  className="w-70 pl-8 pr-3 py-1 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                />
                <svg
                  className="absolute left-2 top-2 h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 bg-white">
          <div className="p-6">
            {/* Componente BookCard */}
            <BookCard bookList={list} />
          </div>
        </main>
      </div>

      {/* Footer no final da página */}
      <Footer />
    </div>
  );
};

export default BookListPage;