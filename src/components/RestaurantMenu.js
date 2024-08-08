import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategories";




const RestaurantMenu = ({setAutoButton})=>{

    
    const {resId} = useParams();  
    console.log(resId); 
    
    const resInfo = useRestaurantMenu(resId); 
    const [showIndex , setShowIndex] = useState(null); 
    //const [showItems , setShowItems] = useState(null); 
    const [closeItems , setCloseItems]= useState(null); 
  
if(resInfo === null){
    return <Shimmer/>
}
   const {name , cuisines} =
    resInfo?.cards[2]?.card?.card?.info; 


    //const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards); 

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'); 
    console.log(categories); 

    return  (
        <div className="text-center p-4 mt-4">
            <h1 className="font-bold text-2xl"  >{name}</h1>
            <p className=" font-bold text-lg">{cuisines.join(" , ")}</p>
            <div>
                {categories.map((category , index) => (
                        <RestaurantCategory data={category.card?.card}
                        showItems = {index === showIndex ? true : false}
                        setCloseItems = {()=> setCloseItems(null)}
                        setShowIndex = {()=> !closeItems ? setShowIndex(index) : setShowIndex(null) }
                        setAutoButton = {setAutoButton}
                        />
                    ))}
            </div>
        </div>
    )
}

export default RestaurantMenu; 