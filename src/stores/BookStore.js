import {decorate, observable, computed} from 'mobx';
import axios from 'axios';
    //onClick={() => props.store.color = book.color}

class BookStore {
  constructor() {
    this.books = [];
    this.color = "";
    this.loading = true;
    this.query = '';
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

  filteredBooks(color) {
    let arr = [];
    if (this.books && color) {
      arr = this.books.filter(book => {
        return `${book.color}`
        .toLowerCase()
        .includes(color);
      });
    }
    else{
      arr = this.books;
    }
    return arr;
  }

  searchBooks(color) {
    if (this.books) {
      return this.filteredBooks(color).filter(book => {
        return `${book.title}`
        .toLowerCase()
        .includes(this.query);
      });
    }
    return [];
  }

changeBookState(bookid){
  for (var i = 0; i < this.books.length; i++) {
    if( this.books[i].id==bookid ){
      if(this.books[i].available){
        this.books[i].available = false;
      }
      else{
        this.books[i].available = true;
      }
    }
  }
  console.log('----');
  console.log(this.books);
}

}


decorate(BookStore, {
  books: observable,
  color: observable,
  loading: observable,
  query: observable,
  filteredBooks: observable,
  searchBooks: observable,
})

const bookStore =  new BookStore();
bookStore.fetchBooks();
console.log('From bookStore');

export default bookStore;
