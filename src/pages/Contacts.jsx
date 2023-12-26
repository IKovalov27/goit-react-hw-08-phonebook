import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { Title } from './Contacts.styled';
import css from '../components/App.module.css';

const { useEffect } = require('react');
const { useDispatch, useSelector } = require('react-redux');
const { getContactsThunk } = require('redux/contactsThunk');

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.filter);
  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <div className={css.container}>
      <ContactForm/>
      <div>
        <Title>Contacts</Title>
        <Filter />
      </div>
      <ContactList listContact={filterContact()} />
    </div>
  );
};

export default Contacts;
