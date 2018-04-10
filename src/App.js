import React, { Component } from 'react';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import Loading from './Loading';
import AuthorsList from './AuthorsList';
import AuthorDetail from './AuthorDetail';


function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

const auth =   {
    "id": 3,
    "first_name": "J.R.R",
    "last_name": "Tolkein",
    "imageUrl": "https://images.8tracks.com/cover/i/010/010/920/tolkeinbigger-2362.jpg?rect=166,0,500,500&q=98&fm=jpg&fit=max",
    "books": [
        {
            "id": 15,
            "color": "red",
            "authors": [
                {
                    "name": "J.R.R Tolkein",
                    "url": "/api/authors/3/"
                }
            ],
            "title": "The Two Towers"
        },
        {
            "id": 17,
            "color": "black",
            "authors": [
                {
                    "name": "J.R.R Tolkein",
                    "url": "/api/authors/3/"
                }
            ],
            "title": "The Silmarillion"
        },
        {
            "id": 16,
            "color": "blue",
            "authors": [
                {
                    "name": "J.R.R Tolkein",
                    "url": "/api/authors/3/"
                }
            ],
            "title": "The Return of the King"
        },
        {
            "id": 13,
            "color": "black",
            "authors": [
                {
                    "name": "J.R.R Tolkein",
                    "url": "/api/authors/3/"
                }
            ],
            "title": "The Hobbit"
        },
        {
            "id": 14,
            "color": "green",
            "authors": [
                {
                    "name": "J.R.R Tolkein",
                    "url": "/api/authors/3/"
                }
            ],
            "title": "The Fellowship of the Ring"
        }
    ]
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authors: [],
      filterdAuthors: [],
      searchMode: false,
      loading: true,
      detailLoading:false,
      currentAuthor: {},
    }
    this.onSelectAuthor = this.onSelectAuthor.bind(this);
    this.goBack = this.goBack.bind(this);
    this.search = this.search.bind(this);
  }

  onSelectAuthor(id){
    this.setState({currentAuthor:{} , detailLoading:true})
    setTimeout(() => (
    axios.get('https://the-index-api.herokuapp.com/api/authors/'+id)
      .then(res => res.data)
      .then(data => this.setState({currentAuthor:data , detailLoading:false}))
      .catch(err => console.error(err))      
      ),300)
  }

  search(val){
    if (val==''){
      this.setState({filterdAuthors:[], searchMode:false})
    }
    else{
      const arr = this.state.authors.filter(author => (`${author.first_name} ${author.last_name}`).toLowerCase().includes(val.toLowerCase() ) );
      this.setState({filterdAuthors:arr, searchMode:true})
      console.log(this.state.filterdAuthors);
    }
  }

  goBack(){
    this.setState({ currentAuthor:{} })

  }

  componentDidMount() {
    //this.setState({loading:true})
    instance.get('/api/authors/')
      .then(res => res.data)
      .then(authors => this.setState({authors:authors, loading:false}))
      .catch(err => console.error(err));
  }

  getView() {

    //alert((this.state.loading));
    //alert('hmmmm '+(this.state.currentAuthor !== {}));
    //alert((!(this.state.detailLoading)));


    if (this.state.loading) {
      return <Loading />
    }

    else if (this.state.detailLoading) {
      return <Loading />
    }

    else if((!(this.state.loading)) && ((isEmpty(this.state.currentAuthor)))){
      //console.log('here ' + this.state.loading);
      if(this.state.filterdAuthors.length>0){
        //console.log('we are here' + this.state.filterdAuthors);
        return <AuthorsList authors={this.state.filterdAuthors} onSelect={this.onSelectAuthor} searchFn={this.search}/>
      }
      else{
        return <AuthorsList authors={this.state.authors} onSelect={this.onSelectAuthor} searchFn={this.search}/>
      }
    }

    else if((!(isEmpty(this.state.currentAuthor))) && (!(this.state.detailLoading))) {
      return <AuthorDetail author={this.state.currentAuthor}/>
    }

    
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar goBack={this.goBack}/>
          </div>
          <div className="content col-10">
            {this.getView()}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
