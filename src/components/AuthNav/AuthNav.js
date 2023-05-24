import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authContainer}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? css.active : css.linkAuth;
        }}
        to="/login"
      >
        Log in
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? css.active : css.linkAuth;
        }}
        to="/register"
      >
        Sign up
      </NavLink>
    </div>
  );
};

export default AuthNav;