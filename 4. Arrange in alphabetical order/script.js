// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.



function logBookTitles(bookTitles) {
    // sort the book titles in alphabetical order
    bookTitles.sort();
    // log the book titles to the console
    console.log("Book titles in alphabetical order:");
    bookTitles.forEach(title => console.log(title));
  }
  
  function getBookTitles(books, callback) {
    // use the map function to create a new array containing only the book titles
    const bookTitles = books.map(book => book.title);
    // pass the book titles to the callback function
    callback(bookTitles);
  }
  
  // example usage
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];
  
  getBookTitles(books, logBookTitles);
  