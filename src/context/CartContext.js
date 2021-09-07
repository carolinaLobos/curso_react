import React, {useContext, useState, createContext} from "react";

export const CartContext = createContext();
export const useCartContext = ()=> useContext(CartContext);

export const CartProvider = ({children})=>{
    const [cart, setCart]= useState([]);

    const addToCart = (item, quantity)=>{
        if(isInCart(item.id)){
            const newCart = cart.map((cartElement)=>{
                if(cartElement.id ===item.id){
                    return{...cartElement, quantity: cartElement.quantity + quantity};
                    } else return cartElement;
                });
                setCart(newCart);
                } else {
                    setCart((prev)=>[...prev,{...item, quantity}]);
                } 
                console.log(cart)    
    };
    const clear = () =>setCart([]);
    const isInCart = (id) =>cart.some((item)=> item.id===id);
    const removeItem = (itemId)=>{
        setCart(cart.filter((elem)=> elem.item.id!== itemId))
    }
    return (
        <CartContext.Provider value={{cart, clear, isInCart, removeItem, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}