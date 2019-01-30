import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button } from './elements';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button size="small"> Say Hello</Button>
        <Button size="small" type="cancel">
          Don't Say Hello
        </Button>
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
