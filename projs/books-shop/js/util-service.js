'use strict'


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeLorem(size = 100) {
  var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
  var txt = '';
  while (size > 0) {
      size--;
      txt += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  return txt;
}

function sortByPrice(books) {
  books.sort(function (book1, book2) {
      return book1.price - book2.price;
    });
}

function sortByName(books) {
  books.sort(function(book1, book2) {
      var book1Name = book1.name.toUpperCase(); // ignore upper and lowercase
      var book2Name = book2.name.toUpperCase(); // ignore upper and lowercase
      if (book1Name < book2Name) {
        return -1;
      }
      if (book1Name > book2Name) {
        return 1;
      }
      // names must be equal
      return 0;
    });
}