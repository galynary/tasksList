import { List, Item, DeleteButton, ContactWrap } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';
import {
  notificationNoContact,
  notificationError,
} from 'utils/Notifacation/Notifacation';
import { Loader } from 'utils/Loader/Loader';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const onError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (filtered.length === 0 && filter) {
      notificationNoContact();
    }
    return filtered;
  };

  const contactsToDisplay = filteredContacts();

  return (
    <List>
      {isLoading && <Loader />}
      {onError && notificationError()}
      {contactsToDisplay.map(({ id, name, number }) => (
        <Item key={id}>
          <div>
            <ContactWrap>
              <AccountCircleIcon fontSize="large" color="primary" />
              <p>{name}</p>
            </ContactWrap>
            <ContactWrap>
              <LocalPhoneIcon fontSize="large" color="primary" />
              <p>{number}</p>
            </ContactWrap>
          </div>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};
