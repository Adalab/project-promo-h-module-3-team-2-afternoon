import React from 'react';
import Landing from './components/Landing'
import CardPage from './components/CardPage';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/cardpage" component={CardPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
