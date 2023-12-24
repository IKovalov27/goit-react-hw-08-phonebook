import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 20px 0 0 0;

  list-style: none;
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

  &:hover {
    background-color: rgba(92, 92, 92, 0.847);
    color: white;
    border-color: transparent;
  }
`;

export const Wrapper = styled.div`
  margin-right: 15px;
`;