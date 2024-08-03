import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            userInfo: {
                name: "dummy",
                location : "dummyLocation", 
            },
        }
       
        // console.log(this.props.name + "child Constructor")
    }

    async componentDidMount (){

        const data =  await fetch("https://api.github.com/users/Ansh3102"); 
        const json = await data.json();
        this.setState ({
            userInfo : json,
        });

        console.log(json); 

    
    }
    render(){
        const { name, login} = this.state.userInfo; 
      
        // console.log(name + " child render") 
        return(
            <div className="user-card">
                
            
            <h1>Name : {name}</h1>
            <h2>UserName : {login} </h2>
            <h3>Contact : @anshul.sharma </h3>
             </div>     
        )
        
    }
} 

export default UserClass; 