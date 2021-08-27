import { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer'; 
import {BrowserRouter, Route} from "react-router-dom"

class App extends Component {
  render(){
  return (<>
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
  
    </switch>
    </BrowserRouter>
    </>
  );
  }
}

export default App;
