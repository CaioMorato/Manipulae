// vitals
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import Homepage from './pages/Homepage';
import MyLibraryHook from './pages/MyLibrary.js';
import NotFound from './pages/NotFound';
// styles
import './reset.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/MyLibrary" component={MyLibraryHook} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
