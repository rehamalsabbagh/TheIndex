import React from 'react';
import {NavLink} from 'react-router-dom';

function Sidebar(props) {
  return (
    <sidebar>
      <img src="/theindex.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <NavLink exact to="/authors">AUTHORS</NavLink>
          <NavLink exact to="/books">BOOKS</NavLink>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
