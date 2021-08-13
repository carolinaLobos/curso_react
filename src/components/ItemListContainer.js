import './componentStyles.css';
import ItemCounter from './ItemCounter';

const ItemListContainer =function(props){
    
    return <div className="saludo">
        <h1>{props.greeting}</h1>
        <ItemCounter stock="5" />
    </div>
}

export default ItemListContainer;