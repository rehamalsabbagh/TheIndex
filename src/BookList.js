import React, {Component} from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';

import axios from 'axios';

import Loading from './Loading';
import BookRow from './BookRow';
import SearchBar from './SearchBar';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true,
      filteredBooks: [],
      searchActive: false,
      filteredBooksColor:[],
      searchColorActive: false,
      color: this.props.match.params.bookColor,
    }
    this.filterBooks = this.filterBooks.bind(this);
    this.filterBooksClr = this.filterBooksClr.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bookColor !== this.props.match.params.bookColor) {
      this.filterBooksClr();
      //console.log('gggggggggg');
    }
    //this.setState({color: this.props.match.params.bookColor});
  }

  componentDidMount() {
    this.getBooks();
    //console.log("initial " + this.props.match.params.bookColor);
    //this.filterBooksClr();
  }

  filterBooks(query) {
   this.setState({searchColorActive:false}); 
    query = query.toLowerCase();
    let filteredBooks = this.state.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({filteredBooks:filteredBooks,searchActive:true})
  }

  filterBooksClr() {
   //this.setState({searchActive:false}); 
    //console.log('this is the filterBooksClr fn');
    if(this.props.match.params.bookColor){
    // //}
    //   color = color.toLowerCase();
    //console.log('hmmm' + this.state.color);
      let filteredBooksColor = this.state.books.filter(book => {
        return `${book.color}`.toLowerCase().includes(this.props.match.params.bookColor.toLowerCase());
      });
      this.setState({filteredBooksColor:filteredBooksColor,searchColorActive:true,});
      //console.log(filteredBooksColor);
}
  }


  getBooks() {
    axios.get(`https://the-index-api.herokuapp.com/api/books/`)
    .then(res => res.data)
    .then(books => this.setState({books: books, loading: false}))
    .catch(err => console.error(err));
  }

  render() {
    let bookRows = this.state.books.map(book => <BookRow key={book.title} book={book} callfun={this.filterBooksClr}/>);

    if(this.props.match.params.bookColor){
      //console.log('here color');
      bookRows = this.state.filteredBooksColor.map(book => <BookRow key={book.title} book={book} callfun={this.filterBooksClr}/>);
    }

    else if(this.state.searchActive){
      //console.log('here search');
      bookRows = this.state.filteredBooks.map(book => <BookRow key={book.title} book={book} callfun={this.filterBooksClr}/>);
    }

    return (this.state.loading ? <Loading /> :
      <div>
        <SearchBar changeHandler={this.filterBooks} />
        <table className='mt-3 table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
          {bookRows}
          <br/>
          <Link exact to="/books">ALL BOOKS</Link>
          </tbody>
        </table>
      </div>
)
  }
}

export default BookList;
