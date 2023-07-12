import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <>
      <NavLink
        className={({ isActive }) => {
          return isActive ? css.activeContactsLink : css.contactsLink;
        }}
        to="/contacts"
      >
        Contacts
      </NavLink>

      <div className={css.userMenu}>
        <button
          className={css.button}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default UserMenu;
