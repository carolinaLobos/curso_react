import "./componentsStyles/itemDetailStyle.css";
//import logo from "../assets/img/logo.PNG";
import ItemCounter from './ItemCounter.js';

const ItemDetail = function({producto}){
    return (<div className="det">
        
        <div className="detalle">
            <h4>{producto.login}</h4> 
            <p>{producto.url}</p> 
            <p>${producto.id}.000</p>
            <p>Stock: {producto.id}</p>
            <ItemCounter stock={producto.id} />
           
            
        </div>
        <img src={producto.avatar_url} alt=""/>
        
    </div>)
}
export default ItemDetail;