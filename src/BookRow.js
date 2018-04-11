import React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';

function BookRow(props) {
  const book = props.book
  //console.log(props);
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.authors && book.authors.map(author => <Link to={"/authors/"+author.id+"/"}>{author.name}</Link>)}</td>
      <td>
        <Link to={"/books/"+book.color+"/"}><button className="btn" style={{backgroundColor: book.color}} /></Link>
      </td>
    </tr>
  );
}

export default BookRow;
