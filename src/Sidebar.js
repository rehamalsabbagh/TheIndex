import React from 'react';
import {NavLink} from 'react-router-dom';

function Sidebar(props) {
  return (
    <sidebar>
      <img src="/theindex.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <NavLink exact to="/authors">AUTHORS</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/books" onClick={() => props.bookStore.color = ''}>BOOKS</NavLink>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
