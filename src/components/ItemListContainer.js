import './componentsStyles/componentStyles.css';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import React, { useState, useEffect } from "react";

const ItemListContainer =function(props){
    const [prods, setProds] = useState([]);
    const {idCategoria}=useParams();
    // UseEffect
    useEffect(() => {
        fetch("https://api.github.com/users")
          .then((response) => response.json())
          .then(idCategoria?(data) => setProds(data.fiter(e=>e.id)):(data) =>setProds(data));
      }, [idCategoria]);
    console.log(prods);
    return <div className="saludo">
        <ItemList products={prods}/>
    </div>
}
export default ItemListContainer;