import React from 'react';
import AuthorCard from './AuthorCard';
import axios from 'axios';
import BooksDetail from './BooksDetail'

function AuthorDetail(props) {

  return (
        <div className="author col-xs-10">
            <div>
                <h3>{props.author.first_name} {props.author.last_name}</h3>
                <img src={props.author.imageUrl}/>
            </div>
                <BooksDetail books={props.author.books} />
        </div>
  );
}

export default AuthorDetail;
