const { Navigate } = require('react-router-dom');
const { useSelector } = require('react-redux');
const { selectAuth } = require('redux/auth/selectors');

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  return !isLoggedIn ? children : <Navigate to="/" />;
};

export default PublicRoute;
