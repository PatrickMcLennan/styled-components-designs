import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { purple, elevation, fixed, serif } from '../utilities';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src={logo} alt="logo" />
    </header>
  );
};

const StyledHeader = styled(Header)`
  background: ${purple};
  padding: 10px 5%;
  ${fixed()}
  ${elevation[2]};
  width: 100%;
  ${serif}
  & img {
    width: 60px;
  }
`;

export default StyledHeader;
