import './componentStyles.css';
import ItemCounter from './ItemCounter.js';
import ItemList from './ItemList';

const ItemListContainer =function(props){
    return <div className="saludo">
        <h1>{props.greeting}</h1>
        <ItemCounter stock="5" />
        <ItemList/>
    </div>
}
export default ItemListContainer;