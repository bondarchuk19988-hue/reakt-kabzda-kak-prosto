import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className={s.nav}>
      <div className={s.xam}>Xam</div>
      <div className={s.con}>
        <div>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/dialogs'>Messages</NavLink> 
        </div>
         <div>
          <a>News</a>
        </div>
         <div>
          <NavLink to='/Music'>Music</NavLink>
        </div>
         <div>
          <a>Settings</a> 
        </div>
      </div>
      </nav>
    )
}

export default Navbar;