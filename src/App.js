// vitals
import React from 'react';
import { HashRouter as BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import Homepage from './pages/Homepage';
import MyLibrary from './pages/MyLibrary.js';
import NotFound from './pages/NotFound';
// styles
import './reset.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/MyLibrary" component={MyLibrary} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
