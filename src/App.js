import React from 'react';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import CarouselNav from './components/Carousel';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart';
import { CartFuncion } from './context/CartContext';
import './App.css';



function App() {
  return <>
 
  <BrowserRouter>
    <CartFuncion>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={CarouselNav}/>

        <Route path="/productos" component={ItemListContainer}/>
      
        <Route path="/itemDetail/:title" component={ItemDetailContainer}/>
        
        <Route path="/cart" component={Cart}/>
      </Switch>
    </CartFuncion>
  </BrowserRouter>

</>
}

export default App;