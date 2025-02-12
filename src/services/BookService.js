import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

// requisição get para a API do Google Books

export const getBooks = async (title, startIndex) => {
    try {
        const response = await axios.get(`${API_URL}?q=${encodeURIComponent(title)}&maxResults=12&startIndex=${encodeURIComponent(startIndex)}`);
        return response.data.items;
    } catch (error) {
        console.error(error);
    }
}