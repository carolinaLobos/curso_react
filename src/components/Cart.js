import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import "./componentsStyles/cartStyle.css";

const Cart = function(){
    const {cart, removeItem} = useCartContext();
    let acum=0;
    function eliminar(id){
        removeItem(id)
    }
    return(<div>
        <table className="tabla">
            <th>Valor</th>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>total item</th>
            <th>Eliminar</th>
            {cart.map((prod) => {
                acum=(prod.quantity*prod.id)+acum;
                return (
                <tr><td>{prod.id}</td>
                <td><img src="{prod.avatar_url}" alt="img"/></td>        
                <td>{prod.url}</td>
                <td>{prod.quantity}</td>
                <td>{prod.id*prod.quantity }</td>
                <td> <button className="btnEliminar"  type="button" onClick={() => eliminar(prod.id)}>Eliminar</button></td>
                </tr>)})}
                <tr><td> </td><td> </td><td> </td><td> </td><td>TOTAL COMPRA</td><td>{acum}</td></tr>
        </table>
    </div>)
}
export default Cart;
