import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className={s.nav}>
      <div className={s.con}>
        <div>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/dailogs'>Messages</NavLink> 
        </div>
         <div>
          <a>News</a>
        </div>
         <div>
          <a>Music</a>
        </div>
         <div>
          <a>Settings</a> 
        </div>
      </div>
      </nav>
    )
}

export default Navbar;