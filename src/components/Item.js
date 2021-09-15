
import "./componentsStyles/itemStyle.css";
import {Link} from "react-router-dom";

const Item =function({producto}){
    
    return (
        <Link to={`item/${producto.id}`}>
        <div className="card" >
        <img src={producto.img} alt=""/>
        <div className="nombre">
        <h3>{producto.nombre}</h3>
        <div className="detalle"></div>
        <h3>${producto.precio}</h3>

        </div>
    </div>
    </Link>
    )
}
export default Item;