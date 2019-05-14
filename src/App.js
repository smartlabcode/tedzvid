import React from 'react';
import Home from './Body/HomePage';
import Header from './Body/MainHeader';

import L1 from './Lessons/Lesson1';
import L2 from './Lessons/Lesson2';
import L3 from './Lessons/Lesson3';
import L4 from './Lessons/Lesson4';
import L5 from './Lessons/Lesson5';
import L6 from './Lessons/Lesson6';

import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container className="lekcije-wrapper my-auto">
        <Header/>

        <Route path="/" exact component={Home}/>
        <Route path="/lekcija1" component={L1}/>
        <Route path="/lekcija2" component={L2}/>
        <Route path="/lekcija3" component={L3}/>
        <Route path="/lekcija4" component={L4}/>
        <Route path="/lekcija5" component={L5}/>
        <Route path="/lekcija6" component={L6}/>

      </Container>
    </BrowserRouter>
  );
}

export default App;
