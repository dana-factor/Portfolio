'use strict'
const KEY = 'books';
var gNextId = 1;
var gBooks = _createBooks()

const PAGE_SIZE = 3;
var gPageIdx = 0;

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id;
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage()
}

function addBook(name, price) {
    gBooks.push(_createBook(name, price))
    _saveBooksToStorage()
}

function updateBook(bookId, bookPrice) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    book.price = bookPrice
    _saveBooksToStorage()
}

function getBookById(bookId) {
    return gBooks.find(function (book) {
        return bookId === book.id
    })
}


function decreaseRate(book) {
    if (book.rate === 0) return
    book.rate--
    _saveBooksToStorage()
}

function increaseRate(book) {
    if (book.rate === 10) return
    book.rate++
    _saveBooksToStorage()
}

function setSortByName() {
    sortByName(gBooks)
    _saveBooksToStorage()
}

function setSortByPrice() {
    sortByPrice(gBooks)
    _saveBooksToStorage()
}

function nextPage() {
    if (gBooks.length > (gPageIdx + 1) * PAGE_SIZE) gPageIdx++
}

function prevPage() {
    if (gPageIdx > 0) gPageIdx--
}

function getBooks() {
    var startIdx = gPageIdx * PAGE_SIZE;
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE)
}

function getBookByName(bookName) {
    var book = gBooks.find(function (book) {
        return bookName === book.name
    })
    return book
}

function _createBooks() {
    var books = loadFromStorage(books)
    if (!books || !books.length) {
        var bookNames = ['The Alchemist', '1984', 'Harry Potter', 'The Giving Tree', 'The Little Prince', 'The HTML Book', 'The Power Of Now', 'The Bibble'];
        books = bookNames.map(function (bookName) {
            return _createBook(bookName)
        })

    }
    saveToStorage(KEY, books)
    return books
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}

function _createBook(name, price) {
    if (!price) price = getRandomInt(50, 100);
    return {
        id: gNextId++,
        name: name,
        price: price,
        imgUrl: 'book.png',
        rate: 0
    };
};


// function _createBooks() {
//     var books = loadFromStorage(books)
//     if (!books || !books.length) {
//         var bookNames = ['The Alchemist', '1984', 'Harry Potter'];
//         books = bookNames.map(_createBook)
//         saveToStorage('books', books)
//     }

//     return books;
// }


