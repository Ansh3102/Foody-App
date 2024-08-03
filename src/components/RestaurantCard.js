import { CDN_LINK } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props; 
    
    if (!resData?.info) {
        return null; // or display a placeholder/loading indicator
    }
    
    const {cloudinaryImageId,
        name,
        cuisines,avgRating,
        locality

    } = resData.info;
    return (
        <div className=" m-8 p-4 w-[250px] bg-slate-200 rounded-lg hover:shadow-2xl">
              <img  alt="res-logo"className="rounded-lg" src={CDN_LINK 
              + cloudinaryImageId} />
            <h4 className="font-bold text-xl py-4">{name}</h4>
            <h5>{cuisines.join(",  ")}</h5>
            <h5>{avgRating}</h5>
            <h5>{locality}</h5>

        </div>
    );
};

export default RestaurantCard;