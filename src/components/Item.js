import "./itemStyle.css";

const Item =function({img, nombre, precio, stock, descripcion}){
    return (
        <div className="card">
        <img src={img} />
        <div className="detalle">
            <h4>{nombre}</h4> 
            <p>{descripcion}</p> 
            <a>{precio}</a>
            <p>{stock}</p>
        </div>
    </div>
    )
}
export default Item;