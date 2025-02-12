import React from "react";
import "./BookCard.css";

const BookCard = ({ bookList }) => { 
    return (
        <div className="book-card-container">
            {bookList.map((book) => (
                <div key={book.id} className="book-card">
                    <img src={book.thumbnail} alt="Capa do Livro" />
                    <h2>{book.title}</h2>
                    <p>{book.authors}</p>
                    <p>{book.publisher}</p>
                    <p>{book.publishedDate}</p>
                </div>
            ))}
        </div>
    );
}

export default BookCard;