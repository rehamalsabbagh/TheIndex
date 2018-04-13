import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {observer} from 'mobx-react';

// Components
import Sidebar from './Sidebar';
import Loading from './Loading';
import AuthorsList from './AuthorsList';
import AuthorDetail from './AuthorDetail';
import BookList from './BookList';


function App(props) {
  const authorStore = props.authorStore;
  const bookStore = props.bookStore;
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar bookStore={bookStore}/>
        </div>
        <div className="content col-10">
          {authorStore.loading ?
            <Loading /> :
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/authors'/>}/>
              <Route path='/authors/:authorID'
                     render={props => <AuthorDetail {...props} bookStore={bookStore} authorStore={authorStore} />}/>
              <Route path='/authors/'
                     render={
                       props => <AuthorsList {...props} authorStore={authorStore}/>
                     }/>
              <Route path='/books/:bookColor'
                     render={
                       props => <BookList {...props} bookStore={bookStore}/>
                     }/>
              <Route path='/books/'
                     render={
                       props => <BookList {...props} bookStore={bookStore}/>
                     }/>
            </Switch>}
          </div>
        </div>
      </div>
  );
}

export default withRouter(observer(App));
