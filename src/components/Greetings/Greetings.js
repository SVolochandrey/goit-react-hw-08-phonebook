import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth, selectUserName } from 'redux/auth/selectors';
import Message from 'components/Message/Message';
import css from './Greetings.module.css';
import image from 'images/phonebook1.png';

const Greetings = () => {
  const name = useSelector(selectUserName);
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <div className={css.greetings}>
      <h2 className={css.title}> You are welcome!</h2>
      <div className={css.imageContainer}>
        <img src={image} alt="img" width="350px" height='350px' />
      </div>
      {isLoggedIn ? (
        <div className={css.authContainer}>
          <Message
            text={`${name}, go to the contacts page.`}
          />
          <Link className={css.link} to={'/contacts'}>
            Contacts
          </Link>
        </div>
      ) : (
        <>
          <Message text="Log in or register" />
          <div className={css.linkContainer}>
            <Link className={css.link} to={'/login'}>
              Log in
            </Link>
            <Link className={css.link} to={'/register'}>
              Sign up
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Greetings;