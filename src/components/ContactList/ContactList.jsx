import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';
import { List, Item, Button, Container, Wrapper } from './ContactList.styled';

import { useDispatch } from 'react-redux';
import { delContactsThunk } from '../../redux/contactsThunk';

export const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();
  return listContact.map(cont => {
    return (
      <List>
        <Item key={cont.id}>
          <Container>
            <Wrapper>
              <FaUserAlt className={css.icon} />
            </Wrapper>
            {cont.name}: {cont.number}
            <Button 
              type="button"          
              onClick={() => {
                dispatch(delContactsThunk(cont.id));
              }} 
            >
              <FaTrashAlt />
            </Button>
          </Container>
        </Item>
      </List>
    );
  });
};

ContactList.propTypes = {
  listContact: PropTypes.array.isRequired,
}