import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import GlobalStyle from './Global';
import { Heading, Button, CancelButton } from './elements';

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
);

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
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
