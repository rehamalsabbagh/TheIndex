import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';


function BookRow(props) {
  const book = props.book;
  const authors = book.authors;
    const authorComponants = authors.map(
      author => <Link key={author.name} to={`/authors/${author.id}`}>{author.name}</Link>
    )
    .reduce((prev, curr) => [prev, ', ', curr]);
  return (
    <tr>
      <td>
        <button className={`btn btn-${book.available ? 'success' : 'danger'}`}
                onClick={() => props.store.changeBookState(book.id)}>
          {book.available ? 'borrow' : 'return'}
        </button>
      </td>
      <td>{book.title}</td>
      <td>{authorComponants}</td>
      <td>
        <Link to={`/books/${book.color}`}>
          <button className="btn" style={{backgroundColor: book.color}} />
        </Link>
      </td>
    </tr>
  );
}

export default observer(BookRow);
