import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () =>
{
    
    const onlineStatus = useOnlineStatus(); 
    const [btnLogName , setBtnLogName] = useState("Login"); 
    const cartItems = useSelector((store) => store.cart.items); 
    console.log(cartItems); 
    return (
        <div className="flex justify-between bg-blue-100 shadow-lg">
            <div className="w-36 p-4">
            <img className="logo" src={LOGO_LINK} alt="res-logo" />
            </div>
            <div className="flex item-center py-4">
                <ul className="p-4 m-4 flex ">
                    <li className="px-4 ">Online Status : {onlineStatus ?  "🟢" :  "🔴"} </li>
                    <li className="px-4 "><Link to="/">Home</Link></li>
                    <li className="px-4 "><Link to="/about">About Us</Link></li>
                    <li className="px-4 "><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 "><Link to="/grocery"> Grocery</Link></li >
                    <li className="px-4 ">Order</li>
                    <li className="px-4 font-bold text-l"><Link to="/cart"> Cart - {cartItems.length}</Link></li>
                    <button className="flex" onClick={()=>{
                        btnLogName === "Login" ? setBtnLogName("Logout") : setBtnLogName("Login"); 
                    }}>{btnLogName}</button>
                </ul>
                    
            </div>
        </div>
    );
};

export default Header; 