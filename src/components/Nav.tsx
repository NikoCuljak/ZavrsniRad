import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <NavLink to="/" exact className="nav__link" activeClassName="active__link"> Unos </NavLink>
            <NavLink to="/monthly-table" exact className="nav__link" activeClassName="active__link"> Mjesečna tablica </NavLink>
            <NavLink to="/report" exact className="nav__link" activeClassName="active__link"> Izvještaj </NavLink>
        </div>
    )
}

export default Nav;