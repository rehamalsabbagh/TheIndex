import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ""}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    this.props.searchFn(event.target.value);
  }

  render() {
    return (
      <div className="form-group">
        <div className="input-group my-3">
          <input className="form-control"
                         type="text"
                         value={this.state.value}
                         onChange={this.handleChange}/>
          <div className="input-group-append" >
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch}/>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;