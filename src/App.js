import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.svg';
import './App.css';

const size = {
  small: 400,
  medium: 960,
  large: 1140
};

// in PX
const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// in Em
const aboveEM = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

console.log('above', above);

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
);

// CSS Helper
// Needed for props in mixin arguments
const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`;
//

const Heading = styled.h1`
  font-size: 2rem;
  ${above.medium`
    color: blue;
  `}
`;

const color = 'white';

const Button = styled.button`
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

const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop}
`;

const AppWrapper = styled.div`
  header {
    background: teal;
  }
  ${Button} {
    margin-bottom: 2rem;
  }
`;

const DoubleFake = styled(Fake)`
  h2 {
    color: red;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <DoubleFake />
          <Fake />
          <Button>Save</Button>
          <CancelButton top="100">Cancel</CancelButton>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </AppWrapper>
    );
  }
}

export default App;
