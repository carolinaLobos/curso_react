
import "./componentsStyles/itemStyle.css";
import {Link} from "react-router-dom";

const Item =function({producto}){
    
    return (
        <Link to={`item/${producto.login}`}>
        <div className="card" >
        <img src={producto.avatar_url} alt=""/>
        <div className="detalle">
            <h4>{producto.login}</h4> 
        </div>
    </div>
    </Link>
    )
}
export default Item;