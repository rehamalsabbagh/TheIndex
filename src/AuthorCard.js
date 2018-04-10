import React from 'react';

function AuthorCard(props) {
  //console.log('here 3:' + props.onSelect);
  return (
    <div className="col-4">
      <a href="#" className="card" onClick={()=>props.onSelect(props.author.id)}>
        <div className="image">
          <img className="card-img-top img-fluid" src={props.author.imageUrl} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{props.author.first_name} {props.author.last_name}</span>
          </h5>
          <small className="card-text">{props.author.books.length} books</small>
        </div>
      </a>
    </div>
  );
}

export default AuthorCard;
