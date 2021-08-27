import './componentsStyles/componentStyles.css';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.PNG";

const ItemListContainer =function(){
    const [prods, setProds] = useState([]);
    const {idCategoria}=useParams();
    // UseEffect
    useEffect(() => {
        fetch("https://api.github.com/users")
          .then((response) => response.json())
          .then(idCategoria?(data) => setProds(data.filter(e => e.id > parseInt(idCategoria))): (data) =>setProds(data));
      }, [idCategoria]);
    
    
        if(!idCategoria){
            return <div className="saludo">
                <img className="logo" src={logo} />
                <div className="presentacion">
                <h1>Aquí encontraras el estilo que buscas, diferente, vanguardista, clásico y cómodo.....
                Vístete sin miedo, sin culpas, sin edad o rol.<br/> Las marcas del mundo directo a tu puerta.</h1>
                </div>
            </div>
        }
        else {
            return <div className="productos">
            <ItemList products={prods}/>
            </div>
        }
        
   
}
export default ItemListContainer;