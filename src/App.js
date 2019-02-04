import React, { Component } from 'react';
import styled from 'styled-components/macro';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button, Card } from './elements';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <main
          css={`
            background: red;

            h2 {
              font-size: 100px;
            }
          `}>
          <Card>
            <h2>Card Heading</h2>
            <Card.Button> Say Hello</Card.Button>
            <Card.Button modifiers={['small', 'cancel']}>
              Don't Say Hello
            </Card.Button>
          </Card>
        </main>
      </div>
    );
  }
}

export default App;
