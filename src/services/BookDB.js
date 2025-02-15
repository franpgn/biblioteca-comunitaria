/**
 * Adiciona um novo livro ao localStorage.
 * @param {string} title - O título do livro.
 * @param {string} author - O autor do livro.
 * @param {string} genre - O gênero do livro.
 * @param {number} year - O ano de publicação do livro.
 */
function addBook(title, author, genre, year) {
    // Cria um objeto 'book' com as propriedades fornecidas
    const book = {
        title: title,
        author: author,
        genre: genre,
        year: year
    };

    // Gera uma chave única usando o timestamp atual
    const key = `${Date.now()}`;

    // Armazena o livro no localStorage serializado em JSON
    localStorage.setItem(key, JSON.stringify(book));
}

/**
 * Busca livros no localStorage com base em um termo de pesquisa.
 * @param {string} search - O termo a ser pesquisado.
 * @returns {Array} Um array de objetos contendo a chave e o livro correspondente.
 */
function searchBook(search) {
    const results = [];
    // Converte o termo de busca para minúsculas para uma pesquisa case-insensitive
    search = search.toLowerCase();

    // Itera por todos os itens no localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const book = localStorage.getItem(key);

        // Verifica se o JSON do livro contém o termo de busca e se positivo insere no array
        if (book.toLowerCase().includes(search)) {
            results.push({ book: JSON.parse(book) });
        }
    }

    return results;
}
