import './componentStyles.css';

const ItemListContainer =function(props){
    return <div className="saludo">
        <h1>{props.greeting}</h1>
    </div>
}

export default ItemListContainer;