import React from "react"
import NavBar from "./NavBar"
import Section from "./Section"
import data from "./data"

// console.log(data)

const element = data.map(function(item){
    return <Section
        key = {item.title}
        item = {item}
    />
})
// console.log(element)

export default function App(){
    return (
        <div>
            <NavBar />
            {element}
        </div>
    )
}