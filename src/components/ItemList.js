
import "./componentsStyles/itemListStyle.css";
import Item from './Item.js';

const ItemList =function({products}){
    
    return <div className="items">
        {products.map((prod) => {
            return (<Item producto={prod}/>)
        })
    }
    </div>
}
export default ItemList;