import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import Preview from './components/Preview';
import Content from './pages/Home';
import Comms from './components/Communication';
import Footer from './components/Footer';
import Product from './pages/Product'

function App() {
  return (
    <div className="wrapper">

      <Header />

      <Route path="/" exact>
        <Preview />
        <Content /> 
        <Comms />
      </Route>

      <Route path="/otherpage/:id" exact>
        <Product />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
