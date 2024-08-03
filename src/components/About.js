import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component{
    constructor(props){
    super(props)
    console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent Component did mount")
    }

render (){
console.log("Parent render")
    return (
        <div>
            <h1>This is about page</h1>

            <UserClass name="1st" Location = "Indore"/>
            <UserClass name="2st" Location = "Indore"/>

        </div>
    )
}
}

export default About ; 