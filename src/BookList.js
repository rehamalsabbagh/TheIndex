import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Loading from './Loading';
import BookTable from './BookTable';

import {observer} from 'mobx-react';

import AuthorCard from './AuthorCard';
import SearchBar from './SearchBar';
import BookRow from './BookRow';

function BookList(props) {

console.log(props);
// if(this.props.match.params.bookColor){
// 	props.bookStore.color = this.props.match.params.bookColor;
// }
let books = props.bookStore.filteredBooks(this.props.match.params.bookColor);
console.log(books);
if(props.bookStore.query){
	books = props.bookStore.searchBooks(this.props.match.params.bookColor);
}


  return (
    <div className="books">
      <h3>Books</h3>
      <SearchBar store={props.bookStore} />
      <div className="row">
      <BookTable books={books} store={props.bookStore}/>
      </div>
    </div>
  );
}

export default observer(BookList);

