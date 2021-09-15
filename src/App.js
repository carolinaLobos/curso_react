import { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Cart from './components/Cart'; 
import ItemListContainer from './components/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer'; 
import {BrowserRouter, Route} from "react-router-dom"
import {CartProvider} from "./context/CartContext"

class App extends Component {
  render(){
  return (<>
  <CartProvider>
    <BrowserRouter>
      <NavBar/>
    <switch>
      <Route exact path="/">
        <ItemListContainer/>
      </Route>
      <Route path="/category/:idCategoria">
        <ItemListContainer/>
      </Route>
      <Route path="/category/item/:itemId">
        <ItemDetailContainer/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
    </switch>
    </BrowserRouter>
    </CartProvider>
    </>
  );
  }
}

export default App;
