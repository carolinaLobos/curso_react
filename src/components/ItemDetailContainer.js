import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import React, { useState, useEffect } from "react";

export function ItemDetailContainer() {
    const [datosDelItem, setDatosDelItem] = useState([]);
    const {itemId}= useParams()

    
    useEffect(() => {
        
        fetch(`https://api.github.com/users/${itemId}`)
          .then((response) => response.json())
          .then((data)=>setDatosDelItem(data));
      }, [itemId]
      );

    return <div>
        <ItemDetail producto={datosDelItem} />
        </div>
    

}
export default ItemDetailContainer;