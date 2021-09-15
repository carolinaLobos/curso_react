import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import React, { useState, useEffect } from "react";
import {db} from './firebase/firebase';


export function ItemDetailContainer() {
    const [datosDelItem, setDatosDelItem] = useState([]);
    const {itemId}= useParams();
    
    const getProduct =  () =>{
      db.collection('productos').onSnapshot((querySnapshot) =>{
        const docs = [];
        querySnapshot.forEach((doc) =>{
          docs.push({...doc.data(), id: doc.id});
        });
        const filterProd = docs.filter((producto) => {
          console.log(itemId)
          return producto.id === itemId;
        });
        setDatosDelItem(filterProd);
        console.log(datosDelItem);
      });
  }
    
    useEffect(() => {
        
       getProduct();
      }, [itemId]
      );

    return <div>
        <ItemDetail producto={datosDelItem} />
        </div>
    

}
export default ItemDetailContainer;