import {decorate, observable, computed} from 'mobx';
import axios from 'axios';

class BookStore {
  constructor() {
    this.books = [];
    this.color = "";
    this.loading = true;
  }

  fetchBooks() {
    return axios.get('https://the-index-api.herokuapp.com/api/books/')
            .then(res => res.data)
            .then(books => {
              this.books = books;
              this.loading = false;
              console.log(books);
            })
            .catch(err => console.error(err));
  }

  getBookById(id) {
    return this.books.find(book => book.id == id);
  }

  changeColor(color) {
    return this.color = color;
  }

  get filteredBooks() {
    if (this.books) {
      return this.books.filter(book => {
        return `${book.color}`
        .toLowerCase()
        .includes(this.color);
      });
    }
    return [];
  }
}

decorate(BookStore, {
  books: observable,
  color: observable,
  loading: observable,
  filteredBooks: computed,
})

const bookStore =  new BookStore();
bookStore.fetchBooks();
console.log('From bookStore');

export default bookStore;
