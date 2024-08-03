import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constants";
const Body = () => {
    const [listOfRestaurant , setListOfRestaurant] = useState ([]); 
    const [filterListOfRestaurant, setFilterListOfRestaurant] = useState([])
    
    useEffect (()=>{
            fetchData(); 
    },[])

    const onlineStatus = useOnlineStatus(); 

    const [searchText , setSearchText] = useState (""); 
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json =   await data.json(); 
        const resCard = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
        console.log(resCard); 
        setListOfRestaurant(resCard); 
        setFilterListOfRestaurant(resCard); 
    
    }
    //Conditional rendering
    console.log(listOfRestaurant); 

    if(onlineStatus === false){
        return(
            <div>
                <h1> You are Offline please check your internet connection </h1>
            </div>
        )
    }
    
    return listOfRestaurant.length === 0  ? <Shimmer/> :  (
      <div className="container">

        
        <div className=" search items-center mt-8 ml-80">
            <input className="border border-black border-solid m-4 w-1/2 h-10 " type="text" name="serachInput" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button className="bg-blue-100 px-4 py-2 rounded-lg" onClick={()=>{
                console.log(searchText)
                const filterSrchList = listOfRestaurant.filter ((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                ); 

               setFilterListOfRestaurant(filterSrchList);
                console.log(listOfRestaurant); 
            }}>Search</button>
           

            <button className="bg-blue-100 m-4 px-4 py-2 rounded-lg" onClick={()=>{
                    const filterList = listOfRestaurant.filter((res)=>res.info.avgRating > 4.2  ); 
                    setFilterListOfRestaurant(filterList); 
                    console.log(filterList); 
            }}>Top rated restaurant</button>
             </div>
       
        <div className="flex flex-wrap">
            {
            
            filterListOfRestaurant.map((restaurant) =>(
               
                <Link key = {restaurant.info.id} 
                    to={"restaurant/" + restaurant.info.id}>
                        <RestaurantCard resData = {restaurant}/></Link>
            ))}

        </div>  
      
        </div>

    );

};

export default Body; 