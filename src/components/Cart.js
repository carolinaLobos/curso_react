//import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import "./componentsStyles/cartStyle.css";

const Cart = function(){
    const {cart, removeItem} = useCartContext();
    
    function eliminar(id){
        removeItem(id)
    }
    return(<div>
        <table className="tabla">
            <th>Id</th>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Valor</th>
            <th>Eliminar</th>
            {cart.map((prod) => {return (<tr><td>{prod.id}</td>
                <td><img src="{prod.avatar_url}" alt="img"/></td>        
                <td>{prod.url}</td>
                <td>{prod.quantity}</td>
                <td>{prod.id}</td>
                <td> <button className="btnEliminar"  type="button" onClick={() => eliminar(prod.id)}>Eliminar</button></td>
                </tr>)})}
        </table>
    </div>)
}
export default Cart;
