import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems,  setCloseItems, setShowIndex})=>{
  //console.log(showItems); 
  //console.log(data.itemCards.length);
  
  const [clicked , setClicked] = useState(false); 
  console.log(clicked);     
  const handleClick = ()=>{
    
    setClicked(!clicked)
    
    clicked ? setShowIndex() : setCloseItems(true);   
  }
    return(
        <div className="w-6/12 m-auto bg-blue-100 shadow-lg p-2 my-4">
           <div className=" cursor-pointer  flex justify-between" onClick={handleClick}>     
            <span className="font-bold">
                {data.title} 
                </span>
           
            <span>{"🔽"}</span>
            </div>
            {showItems && <ItemList items = {data.itemCards}/>  }
        </div>
    );
};

export default RestaurantCategory; 