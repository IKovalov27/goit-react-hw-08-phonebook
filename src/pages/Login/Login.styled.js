import styled from 'styled-components';

export const Group = styled.label`
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 3px;
  padding-left: 10px;

  &:hover {
    outline-color: rgba(92, 92, 92, 0.847);
  }
  &:focus {
    outline-color: rgba(92, 92, 92, 0.847);
  }
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 5px;

  margin-top: 10px;
`;

export const Button = styled.button`
  display: block;

  padding: 3px 15px;
  margin-top: 15px;

  background-color: white;
  border-radius: 5px;
  border: 1px solid #212529;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  transition: 250ms;

  cursor: pointer;
  outline: none;
  font-weight: 600;

  &:hover {
    background-color: #212529;
    color: white;
    border: 1px solid transparent;
  }
`;
