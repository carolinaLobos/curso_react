import { Button } from "semantic-ui-react";
import "./componentsStyles/itemDetailStyle.css";
import ItemCounter from './ItemCounter.js';
import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import {Link} from "react-router-dom";

const ItemDetail = function({producto}){

    const [count, setCount] = useState(0);
    const {addToCart} = useCartContext();
    const agregar = (contador) => {
        setCount(contador);               
    };
   
    function modificarEvent(){
        setCount(0);
    }
    function terminarCompra(){
        addToCart(producto, count);
    }
    return (<div className="det">
        
        <div className="detalle">
            <h4>{producto.login}</h4> 
            <p>{producto.url}</p> 
            <p>${producto.id}.000</p>
            <p>Stock: {producto.id}</p>
            
            
            {count!==0 ? <div> <div className="cantidad">Cantidad solicitada: {count}</div>
            <Link to="/cart"><Button className="btnTerminarCompra" onClick={terminarCompra}>Terminar mi compra</Button></Link>
            <Button className="btnModificar" onClick={modificarEvent}>Modificar cantidad</Button></div>:<div>
            <ItemCounter stock={producto.id} onAdd={agregar}/>
            </div>}
            
           
            
        </div>
        <img src={producto.avatar_url} alt=""/>
        
    </div>)
}
export default ItemDetail;