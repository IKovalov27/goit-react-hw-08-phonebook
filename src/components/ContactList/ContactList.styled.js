import styled from 'styled-components';

export const List = styled.ul`
  font-weight: 600;

  padding: 0;
  margin: 20px 0 0 0;

  list-style: none;

  max-width: 400px;
  width: 290px;

  @media (min-width: 425px) {
    width: 400px;
  }
`;

export const Item = styled.li`
    margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;

  background-color: transparent;
  padding: 3px 15px;

  border: 1px solid black;
  border-radius: 5px;

  margin-left: auto;
  transition: 250ms;

  &:hover {
    background-color: rgba(92, 92, 92, 0.847);
    color: white;
    border-color: transparent;
  }
`;

export const Wrapper = styled.div`
  margin-right: 15px;
`;