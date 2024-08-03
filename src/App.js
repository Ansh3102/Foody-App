import React from "react";
import  ReactDOM from "react-dom/client";
import Body from "./components/Body"; 
import Header from "./components/Header"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy , Suspense} from "react";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
//console.log(resObj[0].card)


//App chunking 
//Code Splitting 
//Dynamic bundling 
//Lazy loading
//On Demand loading 

//Lazy function 
const Grocery = lazy(()=> import("./components/Grocery")); 
const AppLayout = () =>{
    return (
        <div className="Layout">
            <Header/>
           <Outlet/>
        </div>
        
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/" , 
        element : <AppLayout/>,  
        children : [
            {
                path : "/",
                element : <Body/>,
            
            },
            {
                path : "/about",
                element : <About/>,
            
            },
            {
                path : "/grocery",
                element : (
                <Suspense fallback= {<><Shimmer/></>}><Grocery/></Suspense>),
            
            },
            {
                path : "/contact",
                element : <Contact/>,
            
            },
            {
                path:"/restaurant/:resId",
                element : <RestaurantMenu/>,
            }
        ],
        errorElement : <Error/>,   
    }, 
    
])
const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<RouterProvider router = {appRouter} />); 