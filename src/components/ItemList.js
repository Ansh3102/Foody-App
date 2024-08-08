import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ( {items , setAutoButton} )=>{
    
     
    

    const dispatch = useDispatch(); 

    const handleAddItem = (items)  => { 
        dispatch(addItem(items)); 

    }
    console.log(items); 
    return(
       
        <div>
            {items.map((item) => (
                        <div key={item.card.info.id} className="bg-blue-100 p-4 text-left border-gray-400 border-b-2 flex justify-between">
                          
                           
                            
                            <div className="w-10/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price / 100}</span>
                            </div>
                            <div>
                                <p className="text-xs">{item.card.info.description}</p>
                            </div>
                           
                            
                            </div>
                            <div className= "w-2/12">
                            <div className="absolute" >
                                {setAutoButton && <button onClick={() => handleAddItem(item)} className="bg-white w-[40px] text-ceter mt-2 p-2 text-[10px]  mx-[33px] h-auto shadow-lg m-auto text-green-500">
                                    ADD
                                    </button>}
                            </div>
                            <img src={CDN_LINK + item.card.info.imageId} className=" m-auto p-2 w-full"  />
                            </div>
                            
                           </div>
                            
                           
                          
                            
                            
                        
                        
                    ))}
        </div>
    )
}

export default ItemList; 
