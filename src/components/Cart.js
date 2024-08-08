import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = ({addButton})=>{

    console.log(addButton); 
    const cartItems = useSelector((store) => store.cart.items); 
    const dispatch = useDispatch(); 

    const handleClearItem = () => {
        dispatch(clearCart()); 

    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className = "font-bold" >Cart</h1>
            <button onClick={handleClearItem} className="p-2 m-2 bg-black text-white rounded-lg">clearCart</button>
            <div className="w-6/12 m-auto mt-4 ">
            {cartItems.length === 0 && <h1>Cart is Empty Add items and Do more shopping!!!!</h1>}
            <ItemList items = {cartItems} setAutoButton = {addButton}/>
            </div>
            
        </div>
    )
}; 

export default Cart; 