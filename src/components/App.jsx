import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Message from './Message';
import './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      
      <h2 >Contacts</h2>
      <Filter />

      {items.length === 0 && !isLoading && !error ? (
        <Message text="You do not have any contacts in the phone book yet." />
      ) : (
        <ContactList />
      )}

      {error && <Message text="Oops! An error has occurred!" />}

      {isLoading && !error && items.length === 0 && (
        <Message text="Loading..." />
      )}
    </section>
  );
};

export default App;
