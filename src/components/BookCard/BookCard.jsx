import React from "react";

const BookCard = ({ bookList }) => {
  const [showBook, setShowBook] = React.useState(false);
  const [bookSelected, setBookSelected] = React.useState({});

  const handleBookClick = (book) => {
    setBookSelected(book);
    setShowBook(true);
  };

  const handleCloseModal = () => {
    setShowBook(false);
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
            {book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail ? (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Capa do Livro"
              />
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
            <p className="text-[15px] m-0 text-black font-medium">
              {book.volumeInfo.publisher}
            </p>
            <p className="text-[15px] m-0 text-black font-medium">
              {book.volumeInfo.publishedDate}
            </p>
            <p className="text-[15px] m-0 text-black font-medium">
              <strong>Status:</strong> {book.status ? book.status : "Desconhecido"}
            </p>
          </div>
        ))}
      </div>
      {showBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-6 rounded-lg max-w-lg w-full bg-[#FFF0D7]">
            <button
              className="absolute top-2 right-2 text-black text-xl rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={handleCloseModal}
            >
              X
            </button>
            <h2 className="text-2xl mb-4">{bookSelected.volumeInfo.title}</h2>
            <div className="flex gap-4">
              {bookSelected.volumeInfo.imageLinks &&
                bookSelected.volumeInfo.imageLinks.thumbnail && (
                  <img
                    src={bookSelected.volumeInfo.imageLinks.thumbnail}
                    alt="Capa do Livro"
                    className="mb-4"
                  />
                )}
              <div>
                <p>
                  <strong>Autores:</strong>{" "}
                  {bookSelected.volumeInfo.authors
                    ? bookSelected.volumeInfo.authors.join(", ")
                    : "Autor desconhecido"}
                </p>
                <p>
                  <strong>Editora:</strong>{" "}
                  {bookSelected.volumeInfo.publisher
                    ? bookSelected.volumeInfo.publisher
                    : "Editora desconhecida"}
                </p>
                <p>
                  <strong>Data de Publicação:</strong>{" "}
                  {bookSelected.volumeInfo.publishedDate
                    ? bookSelected.volumeInfo.publishedDate
                    : "Data desconhecida"}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {bookSelected.status ? bookSelected.status : "Desconhecido"}
                </p>
              </div>
            </div>
            <p>
              <strong>Descrição:</strong>{" "}
              {bookSelected.volumeInfo.description
                ? bookSelected.volumeInfo.description
                : "Descrição não disponível"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
