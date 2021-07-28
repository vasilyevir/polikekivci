import Main from '../Main/Main';
import AbobUs from '../AbobUs/AbobUs';
import { Route, Switch} from 'react-router-dom';
// import {useState, useEffect} from 'react';

function App() {

  return (
    <div className="root">
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route exact path='/aboutus'>
          <AbobUs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;