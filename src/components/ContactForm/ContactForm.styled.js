import styled from 'styled-components';

export const Input = styled.input`
  margin-top: 5px;
  padding: 3px;

  width: 290px;
  &:hover {
    outline-color: rgba(92, 92, 92, 0.847);
  }
  &:focus {
    outline-color: rgba(92, 92, 92, 0.847);
  }

  @media (min-width: 425px) {
    width: 400px;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  font-weight: 600;
  transition: 250ms;
  &:hover {
    background-color: rgba(92, 92, 92, 0.847);
    color: white;
    border-color: transparent;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  width: 300px;
  padding-top: 50px;

  margin-bottom: 30px;

  @media (min-width: 425px) {
    width: 400px;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Title = styled.span`
  font-weight: 600;
`;