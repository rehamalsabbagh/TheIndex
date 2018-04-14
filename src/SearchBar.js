import React from 'react';
import {observer} from 'mobx-react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

function SearchBar(props) {
  return (
    <div className="form-group col-6 mx-auto">
      <div className="input-group my-3">
        <input className="form-control"
               type="text"
               value={props.store.query}
               onChange={(e) => props.store.query = e.target.value} />
        <div className="input-group-append" >
          <span className="input-group-text">
            <FontAwesomeIcon icon={faSearch}/>
          </span>
        </div>
      </div>
    </div>
  );
}

//export default SearchBar;
export default observer(SearchBar);

