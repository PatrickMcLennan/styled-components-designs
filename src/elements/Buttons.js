import styled from 'styled-components';
import { teal, elevation } from '../utilities';

export const Button = styled.button`
  background: ${teal};
  padding: 5px 20px;
  margin: 7.5px;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  ${elevation[1]};
  ${({ size }) => {
    if (size === 'small') {
      return `
      font-size: 1rem;
      padding: 3px 10px;
    `;
    }
  }}
  ${({ type }) => {
    if (type === 'cancel') {
      return `
      background: tomato;
    `;
    }
  }}

  &:hover {
    transform: scale(1.025);
    ${elevation[2]}
  }
  &:active {
    transform: scale(0.975);
  }
`;

export const CancelButton = styled(Button)`
  background: tomato;
`;
