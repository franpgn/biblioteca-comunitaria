import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import BookCard from "../../components/BookCard/BookCard";
import { getBooks } from "../../services/BookService";
import PaginationComponent from "../../components/Pagination/PaginationComponent";

const SearchIcon = () => (
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
);

const BookListPage = () => {
  const [searchParams, setSearchParams] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (
      searchParams.title ||
      searchParams.author ||
      searchParams.genre ||
      searchParams.year
    ) {
        searchBooks();
    } else {
      getBooks("all", currentIndex).then((data) => {
        setSearchResults(data);
        console.log(data);
      });
    }
  }, [currentPage, currentIndex]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSetCurrentIndex = (index) => {
    setCurrentIndex(index);
  };

  const searchBooks = async () => {
    let query = "";
    if (searchParams.title.trim())
      query += `intitle:${searchParams.title.trim()} `;
    if (searchParams.author.trim())
      query += `inauthor:${searchParams.author.trim()} `;
    if (searchParams.genre.trim())
      query += `subject:${searchParams.genre.trim()} `;
    if (searchParams.year.trim())
      query += `publishedDate:${searchParams.year.trim()}`;

    query = query.trim();

    if (!query) {
      return;
    }

    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&maxResults=12&startIndex=${encodeURIComponent(currentIndex)}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      setSearchResults(data.items);
      console.log(data.items);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      {/* Retângulo cinza claro na vertical */}
      <div className="flex flex-1">
        {/* Aside (menu lateral)  */}
        <aside className="w-74 ml-5 flex flex-col h-full">
          {/* Div que contém as seções com fundo cinza */}
          <div className="bg-gray-100 p-4 rounded-lg space-y-4">
            {/* Seção */}
            <div className="bg-[rgba(255,_240,_215,_1)] p-3 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-black mb-1 font-sans">
                Título
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar autor..."
                  className="w-70 pl-8 pr-3 py-1 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                  value={searchParams.title}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, title: e.target.value })
                  }
                />
                <SearchIcon />
              </div>
            </div>
            {/* Seção */}
            <div className="bg-[rgba(255,_240,_215,_1)] p-3 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-black mb-1 font-sans">
                Autor
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar editora..."
                  className="w-70 pl-8 pr-3 py-1 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                  value={searchParams.author}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, author: e.target.value })
                  }
                />
                <SearchIcon />
              </div>
            </div>
            {/* Seção */}
            <div className="bg-[rgba(255,_240,_215,_1)] p-3 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-black mb-1 font-sans">
                Gênero
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar gênero..."
                  className="w-70 pl-8 pr-3 py-1 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                  value={searchParams.genre}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, genre: e.target.value })
                  }
                />
                <SearchIcon />
              </div>
            </div>
            {/* Seção */}
            <div className="bg-[rgba(255,_240,_215,_1)] p-3 rounded-lg shadow-md">
              <h3 className="text-base font-bold text-black mb-1 font-sans">
                Ano
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar categoria..."
                  className="w-70 pl-8 pr-3 py-1 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#01764C] text-sm font-sans"
                  value={searchParams.year}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, year: e.target.value })
                  }
                />
                <SearchIcon />
              </div>
            </div>
            {/* Botão */}
            <button
              className="bg-[#01764C] text-white px-6 py-2 rounded-md hover:bg-[#015a3a] transition duration-300 ease-in-out font-sans text-sm"
              onClick={searchBooks}
            >
              Pesquisar
            </button>
            {/* Restante do aside */}
          </div>
        </aside>
        {/* Conteúdo principal */}
        <main className="flex-1 p-6 bg-white">
          {searchResults.length > 0 ? (
            <div>
              <h2 className="text-xl font-bold mb-4">Resultados:</h2>
              <BookCard bookList={searchResults} />
              <PaginationComponent
                currentPage={currentPage}
                totalPages={10}
                totalItems={searchResults.length}
                onPageChange={handlePageChange}
                setCurrentIndex={handleSetCurrentIndex}
                currentIndex={currentIndex}
              />
            </div>
          ) : (
            <p>Nenhum resultado encontrado!</p>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BookListPage;
