/* eslint-disable */
import { Link, Route, Switch } from 'react-router-dom';



import { Navbar,Container,Nav,Jumbotron,Button } from 'react-bootstrap';

import Homepage from './pages/Homepage';
import Wordpostpage from './pages/Wordpostpage';
import Wordcorrectpage from './pages/Wordcorrectpage';
import { db } from './firebase'

import './App.css'
import React from 'react';

function App() {

  React.useEffect(()=>{
    console.log(db)
  },[]);

  return (
    <div className='App'> 

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as = {Link} to="/" className='top-nav'>중국어단어장</Navbar.Brand>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/wordpost">
          <Wordpostpage />
        </Route>
        <Route exact path="/wordcorrect">
          <Wordcorrectpage />
        </Route>
        <Route path="/:id">
          <div> 아무거나 적으면 보여줌.</div>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
