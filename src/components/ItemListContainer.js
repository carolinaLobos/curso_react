import './componentsStyles/componentStyles.css';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.PNG";
import {db} from './firebase/firebase';

const ItemListContainer =function(){
    const [prods, setProds] = useState([]);
    const {idCategoria}=useParams();
    //consulta los productos desde la base de datos
    
    const getProducts =  () =>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach((doc) =>{
                docs.push({...doc.data(), id: doc.id});
            });
            setProds(docs);
        });
    }
    // UseEffect
    useEffect(() => {
          getProducts();
          if(idCategoria!== 'todos'){
            console.log(idCategoria);
            setProds(prods.filter(e => e.categoria === idCategoria));
            console.log(prods);
          }
      }, [idCategoria]);
    
    
        if(!idCategoria){
            return <div className="saludo">
                <img className="logo" src={logo} alt=""/>
                <div className="presentacion">
                <h1>Aquí encontraras el estilo que buscas, diferente, vanguardista, clásico y cómodo.....
                Vístete sin miedo, sin culpas, sin edad o rol.<br/> Las marcas del mundo directo a tu puerta.</h1>
                </div>
            </div>
        }
        else {
            return <div className="productos">
            <ItemList products={prods}/>
            </div>
        }
        
   
}
export default ItemListContainer;