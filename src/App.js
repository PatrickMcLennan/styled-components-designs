import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const color = 'white';

const Heading = styled.h1`
  font-size: 2rem;
`;

const Button = styled.button`
  background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')};
  padding: 5px 10px;
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

const AppWrapper = styled.div`
  header {
    background: teal;
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
          <Button>Save</Button>
          <Button type="cancel">Cancel</Button>
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
