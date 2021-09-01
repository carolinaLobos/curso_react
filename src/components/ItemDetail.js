import { Button } from "semantic-ui-react";
import "./componentsStyles/itemDetailStyle.css";
//import ItemCounter from './ItemCounter.js';
import React, { useState } from "react";

const ItemDetail = function({producto}){

    
    const [comprar, setComprar]= useState(false);
    
    const ItemCounter =({estado}) =>{
        
        const inicial=1;
        const stock=producto.id;
        const [contador, setContador] = useState(inicial);
        
        const agregar = () => {
            if(stock>contador){
                setContador(contador+1);
                
            }
            
        };
    
        const descontar = () => {
            if(inicial<contador){
                setContador(contador -1);
               
            }
        };
    
        return (!estado ? <div className="contador">
                <Button onClick={descontar}>-</Button>
                <span> {contador} </span>
                <Button onClick={agregar}>+</Button></div>
                :<p>Cantidad del pedido: {contador}</p>
        )
    
    }
    function comprarEvent(){
        setComprar(true); 
           
    }
    function modificarEvent(){
        setComprar(false);
    }
    function terminarCompra(){
        alert(`compra terminada , compraste  ${producto.login} `);

    }
    return (<div className="det">
        
        <div className="detalle">
            <h4>{producto.login}</h4> 
            <p>{producto.url}</p> 
            <p>${producto.id}.000</p>
            <p>Stock: {producto.id}</p>
            
            
            {comprar ? <div> <ItemCounter estado={comprar}/><Button className="btnTerminarCompra" onClick={terminarCompra}>Terminar mi compra</Button>
            <Button className="btnModificar" onClick={modificarEvent}>Modificar cantidad</Button></div>:<div>
            <ItemCounter estado={comprar}/><Button className="btnComprar" onClick={comprarEvent}>COMPRAR</Button>
            </div>}
            
           
            
        </div>
        <img src={producto.avatar_url} alt=""/>
        
    </div>)
}
export default ItemDetail;