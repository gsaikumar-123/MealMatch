import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        console.log("Constructor Called");
    }

    async componentDidMount(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.705584&lng=81.1119274&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);
    }

    render(){
        console.log("Render Called");
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState(
                        {count : this.state.count+1}
                    )
                }}>Count Increment</button>
            </div>
        );
    }
}


export default UserClass;


// class Component Cycle : 
//     constructor => render => componentDidMount(fetching data from API calls done here)
// Due to modular coding our components are reusable,testable,maintanable