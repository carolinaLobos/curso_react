import './componentsStyles/componentStyles.css';
import { useCartContext } from "../context/CartContext";
const CartWidget =function(){
    const {cart} = useCartContext();
    return <div className="cartWidget">
     <i class="fa fa-shopping-cart"></i>
     {cart.length > 0&& <i>{cart.length}</i>} 
    </div>
}

export default CartWidget;