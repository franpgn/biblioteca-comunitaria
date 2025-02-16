import React, { useState } from "react";

const BookCard = ({ bookList }) => {
  const [showBook, setShowBook] = useState(false);
  const [bookSelected, setBookSelected] = useState({});
  const [showBorrowInfo, setShowBorrowInfo] = useState(false);
  const [borrowerName, setBorrowerName] = useState("");
  const [borrowDate, setBorrowDate] = useState("");
  const [borrowedBooks, setBorrowedBooks] = useState({});

  const handleBookClick = (book) => {
    setBookSelected(book);
    setShowBook(true);
    setShowBorrowInfo(false);
  };

  const handleCloseModal = () => {
    setShowBook(false);
    setShowBorrowInfo(false);
  };

  const handleBorrowClick = () => {
    setShowBorrowInfo(true);
  };

  const handleConfirmBorrow = (bookId) => {
    setShowBorrowInfo(false);
    setBorrowedBooks((prev) => ({ ...prev, [bookId]: true }));
    alert("A Biblioteca Comunitária agradece! Você pegou o livro emprestado.");
  };

  const handleReturnBook = (bookId) => {
    setBorrowedBooks((prev) => ({ ...prev, [bookId]: false }));
    alert("A Biblioteca Comunitária agradece por ter devolvido o livro!");
  };

  return (
    <div>
      <div className="flex gap-1.5 flex-wrap max-w-full px-12 justify-start items-center">
        {bookList.map((book) => (
          <div
            key={book.id}
            className="flex p-2.5 w-[200px] h-[330px] mt-5 flex-col items-start transition-transform duration-400 cursor-pointer border-r border-[#777572] hover:scale-105"
            onClick={() => handleBookClick(book)}
          >
            {book.volumeInfo.imageLinks?.thumbnail ? (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="Capa do Livro" />
            ) : (
              <img
                className="w-[130px] h-[190px]"
                src="https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                alt="Capa do Livro"
              />
            )}
            <h2 className="text-[17px] m-0 text-[#777572] overflow-hidden text-ellipsis">
              {book.volumeInfo.title}
            </h2>
            <p className="text-[15px] m-0 text-black font-medium">
              {book.volumeInfo.authors}
            </p>
          </div>
        ))}
      </div>
      {showBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-6 rounded-lg max-w-lg w-full bg-[#bdad80] relative">
            <button
              className="absolute top-2 right-2 text-black text-xl rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={handleCloseModal}
            >
              X
            </button>
            <h2 className="text-2xl mb-4">{bookSelected.volumeInfo.title}</h2>
            <div className="flex gap-4">
              {bookSelected.volumeInfo.imageLinks?.thumbnail && (
                <img src={bookSelected.volumeInfo.imageLinks.thumbnail} alt="Capa do Livro" className="mb-4" />
              )}
              <div>
                <p><strong>Autores:</strong> {bookSelected.volumeInfo.authors?.join(", ") || "Autor desconhecido"}</p>
                <p><strong>Editora:</strong> {bookSelected.volumeInfo.publisher || "Editora desconhecida"}</p>
                <p><strong>Data de Publicação:</strong> {bookSelected.volumeInfo.publishedDate || "Data desconhecida"}</p>
              </div>
            </div>
            <p><strong>Descrição:</strong> {bookSelected.volumeInfo.description || "Descrição não disponível"}</p>
            {!borrowedBooks[bookSelected.id] ? (
              <button
                className="mt-4 bg-[#01764C] border-none text-white px-4 py-2 rounded-md hover:bg-[#015a3a] transition duration-300 ease-in-out font-sans text-sm"
                onClick={handleBorrowClick}
              >
                Emprestar
              </button>
            ) : (
              <button
                className="mt-4 bg-[#871e2c] border-none text-white px-4 py-2 rounded-md hover:bg-[#5c141e] transition duration-300 ease-in-out font-sans text-sm"
                onClick={() => handleReturnBook(bookSelected.id)}
              >
                Devolver
              </button>
            )}
          </div>
        </div>
      )}
      {showBorrowInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-6 rounded-lg max-w-md w-full bg-white relative">
            <button
              className="absolute top-2 right-2 text-black text-xl rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={() => setShowBorrowInfo(false)}
            >
              X
            </button>
            <h2 className="text-xl mb-4">Confirmação de Empréstimo</h2>
            <p><strong>Livro:</strong> {bookSelected.volumeInfo.title}</p>
            <p><strong>Autor:</strong> {bookSelected.volumeInfo.authors?.join(", ") || "Autor desconhecido"}</p>
            <label className="block mt-2">Nome do Cliente:</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              value={borrowerName}
              onChange={(e) => setBorrowerName(e.target.value)}
            />
            <label className="block mt-2">Data do Empréstimo:</label>
            <input
              type="date"
              className="w-full p-2 border rounded mt-1"
              value={borrowDate}
              onChange={(e) => setBorrowDate(e.target.value)}
            />
            <button
              className="mt-4 bg-[#01764C] border-none text-white px-4 py-2 rounded-md hover:bg-[#015a3a] transition duration-300 ease-in-out font-sans text-sm"
              onClick={() => handleConfirmBorrow(bookSelected.id)}
            >
              Confirmar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
