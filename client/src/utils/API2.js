import axios from "axios";

var url = "https://www.googleapis.com/books/v1/volumes?q=";
var key = ":keyes&key=AIzaSyDM2Khrf570z8fk_NGBr5fd72cbiY2zQs4";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  },
  // Searches for a book
  searchBook: function(search) {
      console.log(search);
      return axios.get(url + search + key);
  }
};
