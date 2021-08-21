import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MyLibrary from './pages/MyLibrary.js';
import './reset.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/MyLibrary" component={MyLibrary} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
