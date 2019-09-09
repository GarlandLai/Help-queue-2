import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';

function App(props){
  console.log(props)
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
