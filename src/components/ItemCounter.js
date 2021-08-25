import React from "react";
import "./componentsStyles/componentStyles.css";
import { Button } from 'semantic-ui-react'

const ItemCounter =({stock}) =>{
    const inicial=1;
    const [contador, setContador] = React.useState(inicial);

    const agregar = () => {
        if(stock>contador)
            setContador(contador +1);

    };

    const descontar = () => {
        if(inicial<contador)
            setContador(contador -1);
    };

    return (
        <div className="contador">
            <Button primary onClick={descontar}>-</Button>
            <span> {contador} </span>
            <Button primary onClick={agregar}>+</Button>
        </div>
    )

}
export default ItemCounter;