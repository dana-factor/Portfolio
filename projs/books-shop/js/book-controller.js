'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
    var books = getBooks()
    var strHtmls = books.map(function (book) {
        return `<tr><td>${book.id}</td><td>${book.name}</td><td>${book.price}</td><td colspan="3"><button onclick="onReadBook(${book.id})">read</button><button onclick="onUpdateBook(${book.id})">update</button><button onclick=onRemoveBook(${book.id})>delete</button></td></tr>`
    })

    document.querySelector('.book-list').innerHTML = (strHtmls.join(''));
}

function onCloseModal(){
    document.querySelector('.modal').hidden = true;
}

function onDecreaseRate(){
    var elModal = document.querySelector('.modal')
    var bookName = elModal.querySelector('h5').innerText
    var book = getBookByName(bookName)
    decreaseRate(book)
    elModal.querySelector('h3').innerText = `${book.rate}`
}

function onIncreaseRate(){
    var elModal = document.querySelector('.modal');
    var bookName = elModal.querySelector('h5').innerText
    var book = getBookByName(bookName)
    increaseRate(book)
    elModal.querySelector('h3').innerText = `${book.rate}`
}

function onReadBook(bookId) {
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h5').innerText = `${book.name}`
    elModal.querySelector('h6').innerText = `${book.price}`
    elModal.querySelector('p').innerText = `${makeLorem()}`
    elModal.querySelector('h3').innerText = `${book.rate}`
    elModal.hidden = false
} 

function onUpdateBook(bookId) {
    var bookPrice = +prompt('Enter book price')
    if (isNaN(bookPrice)) return alert('Price entered is not valid');
    updateBook(bookId, bookPrice)
    renderBooks()
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onAddBook() {
    var elName = document.querySelector('input[name=book-name]');
    var name = elName.value
    var elPrice = document.querySelector('input[name=book-price]');
    var price = elPrice.value
    addBook(name, price)
    elName.value=''
    elPrice.value=''
    renderBooks()
}

function OnSortByName(){
    setSortByName()
    renderBooks()
}

function OnSortByPrice(){
    setSortByPrice()
    renderBooks()
}

function onNextPage(){
    nextPage();
    renderBooks();
}

function onPrevPage(){
    prevPage()
    renderBooks()
}

    // var strHtml = `<table border="1"><thead><th>id</th><th>Tittle</th><th>price</th><th colspan="3">actions</th></thead>
    // <tbody><tr><td>book title</td><td>book title</td><td>book title</td><td>book title</td></tr></tbody>
    // `