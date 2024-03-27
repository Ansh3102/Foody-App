/*
<div id="parent">
    <div id="child1">
        <h1>Hello from heading1</h1>
        <h2>Hello from heading2</h2>
    </div>
    <div id="child2">
        <h1>Hello from heading1</h1>
        <h2>Hello from heading2</h2>
    </div>
</div>*/



const heading = React.createElement("div",{id: "parent"},[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"h1"},"Hello from heading1"),
React.createElement("h2",{id:"h2"},"Hello from heading2")]
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"h1"},"Hello from heading1"),
React.createElement("h2",{id:"h2"},"Hello from heading2")]
)
])
console.log(heading)//object
const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(heading); 