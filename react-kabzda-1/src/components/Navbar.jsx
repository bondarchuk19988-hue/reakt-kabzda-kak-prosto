import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav className={s.nav}>
      <div className={s.con}>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
         <div>
          <a>News</a>
        </div>
         <div>
          <a>Music</a>
        </div>
         <div>
          <a>Satting</a>
        </div>
      </div>
      </nav>
    )
}

export default Navbar;