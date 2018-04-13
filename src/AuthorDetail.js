import React, {Component} from 'react';
import axios from 'axios';
import {observer} from 'mobx-react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Loading from './Loading';
import BookTable from './BookTable';

class AuthorDetail extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   author: {}
    // }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
  //     this.getAuthor();
  //   }
  // }

  // componentDidMount() {
  //   this.getAuthor();
  // }

  // getAuthor() {
  //   console.log(this.props.match.params.authorID);
  //   const authorID = this.props.match.params.authorID;
  //   this.setState({loading: true});
  //   axios.get(`https://the-index-api.herokuapp.com/api/authors/${authorID}/`)
  //   .then(res => res.data)
  //   .then(author => this.setState({author, loading: false}))
  //   .catch(err => console.error(err));
  // }

  render() {
    const author = this.props.authorStore.getAuthorById(this.props.match.params.authorID);

    console.log('..........');
    console.log(this.props.bookStore.getBookById(17));

    const books = author.books.map(bookid => (this.props.bookStore.getBookById(bookid) ));
    //const books = [];

    console.log(books);
    console.log('..........');    



    return this.props.authorStore.loading ? <Loading /> :
      <div className="author col-xs-10">
        <div>
          <h3>{author.first_name} {author.last_name}</h3>
          <img src={author.imageUrl} className="img-thumbnail"/>
        </div>
        <BookTable books={books} />
      </div>;
  }
}

 //export default observer(AuthorDetail);
export default withRouter(observer(AuthorDetail));


