import { Title, Input } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/sliceFilter';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <Title>Find contacts by name</Title>
      <Input
        value={filter}
        onChange={evt => dispatch(filterContact(evt.currentTarget.value))}
        type="text"
        name="filter"
      />
    </>
  );
};