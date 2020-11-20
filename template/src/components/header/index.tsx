import { FunctionalComponent, h } from 'preact';
import * as style from './style.scss';
import { NavLink } from 'react-router-dom';

const Header: FunctionalComponent = () => {
  return (
    <header className={style.header}>
      <h1>Preact App</h1>
      <nav>
        <NavLink end activeClassName={style.active} to="/">
          Home
        </NavLink>
        <NavLink end activeClassName={style.active} to="/profile">
          Me
        </NavLink>
        <NavLink end activeClassName={style.active} to="/profile/john">
          John
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
