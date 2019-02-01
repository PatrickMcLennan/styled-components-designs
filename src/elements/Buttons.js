import styled from 'styled-components';
import { teal, elevation } from '../utilities';
import { lighten } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,
  cancel: () => `
    background: tomato;  
  `
};

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

  &:hover {
    background: ${lighten(0.2, teal)};
    transform: scale(1.025);
    ${elevation[2]}
  }
  &:active {
    transform: scale(0.975);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
