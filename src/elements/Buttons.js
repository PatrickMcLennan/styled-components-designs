import styled from 'styled-components';
import { fixedTop } from '../utilities';

const color = 'white';

export const Button = styled.button`
  background: indigo;
  padding: 5px 20px;
  margin: 7.5px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.025);
  }
  &:active {
    transform: scale(0.975);
  }
`;

export const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;
