import React from "react";
import "./BookCard.css";

const BookCard = ({ bookList }) => { 
    return (
        <div className="book-card-container">
            {bookList.map((book) => (
                <div key={book.id} className="book-card">
                    {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="Capa do Livro" />
                    ) : (
                        <div className="no-thumbnail">Sem imagem</div>
                    )}
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.volumeInfo.authors}</p>
                    <p>{book.volumeInfo.publisher}</p> 
                    <p>{book.volumeInfo.publishedDate}</p>
                </div>
            ))}
        </div>
    );
}

export default BookCard;