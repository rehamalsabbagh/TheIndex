import React from 'react';

function BooksDetail(props) {
  //console.log('here 3:' + props.onSelect);
  return (
            <table className='mt-3 table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Authors</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>{
                        props.books.map(book =>                   
                        <tr>
                        <td>{book.title}</td>
                        <td>{book.authors.map(author =>
                            author.name + ' ,'
                        )}
                        </td>
                        <td>
                            <button className="btn" style={{backgroundColor: book.color}}/>
                        </td>
                    </tr> )
                }
                </tbody>
            </table>
  );
}

export default BooksDetail;
