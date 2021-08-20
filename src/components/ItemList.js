//import Item from './Item.js';
import React, { useState, useEffect } from "react";
import "./itemListStyle.css";
import ItemDetail from './ItemDetail.js';

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
            return (<ItemDetail producto={prod}/>)
        })
    }
    </div>
}
export default ItemList;