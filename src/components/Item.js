
import "./itemStyle.css";
import logo from "../assets/img/logo.PNG";

const Item =function({producto}){
    
    return (
        <div className="card" >
        <img src={logo} alt=""/>
        <div className="detalle">
            <h4>{producto.title}</h4> 
        </div>
    </div>
    )
}
export default Item;