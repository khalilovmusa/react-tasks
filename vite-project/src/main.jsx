import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById('root');
const b = <div>kdkadakjdakjdaskjdh</div>;
class App extends Component{
    render(){
        return(
            <p>World!</p>
        )
    }
};

const element = (
    <>
    <App/>
    </>
)

createRoot(root).render(element);

