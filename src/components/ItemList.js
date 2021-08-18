import Item from './Item.js';
import logo from "../assets/img/logo.PNG";
import React, { useState, useEffect } from "react";
import "./itemListStyle.css";

const ItemList =function(props){
    const [productos, setProductos] = useState([]);
    // UseEffect
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((data) => setProductos(data));
    }, []);
    return <div className="items">
        {productos.map((prod) => {
            return (<Item nombre={prod.title} descripcion={prod.title} precio={prod.userId} stock={prod.id} img={logo}/>)
        })
    }
    </div>
}
export default ItemList;