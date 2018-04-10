import React from 'react';

import AuthorCard from './AuthorCard';
import SearchBar from './SearchBar'

function AuthorsList(props) {
  console.log('here 2:' + props.authors);
  const authors = props.authors.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} onSelect={props.onSelect}/>
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar searchFn={props.searchFn}/>
      <div className="row">
        {authors}
      </div>
    </div>
  );
}

export default AuthorsList;
