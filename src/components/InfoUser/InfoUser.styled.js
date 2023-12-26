import styled from 'styled-components';

export const Button = styled.a`
font-weight: 600;
color: rgba(255, 255, 255, 0.55);
text-decoration: none;
transition: all 250ms;

cursor: pointer;

&:hover {
  color: rgba(255, 255, 255, 0.705);
}


&.active {
  color: white;
}

@media (min-width: 877px) {
  font-size: 23px;
  margin-right: 15px;
}
`;
;