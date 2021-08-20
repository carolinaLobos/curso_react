import "./itemDetailStyle.css";
import logo from "../assets/img/logo.PNG";
import ItemCounter from './ItemCounter.js';

const ItemDetail = function({producto}){
    return (<div className="det">
        
        <div className="detalle">
            <h4>{producto.title}</h4> 
            <p>{producto.title}</p> 
            <p>${producto.userId}.000</p>
            <p>Stock: {producto.id}</p>
            <ItemCounter stock={producto.id} />
           
            
        </div>
        <img src={logo} alt=""/>
        
    </div>)
}
export default ItemDetail;