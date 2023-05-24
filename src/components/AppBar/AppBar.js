import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import Loader from 'components/Loader/Loader';
import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? css.active : css.link;
            }}
            to="/"
          >
            Home
          </NavLink>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AppBar;