import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import './ContactList.module.css';

const ContactList = () => {
  const { items, isLoading } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p >
              {name}: {number}
            </p>
            <button
              onClick={() => dispatch(deleteContact(id))}
              type="button"
              disabled={isLoading}
                          >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
