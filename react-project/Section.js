import React from "react"


export default function Section(props){
    // console.log(props.item)
    return(
        <div className = "destination">
            <img className = "view" src = {props.item.imageUrl} alt = "Mount Fuji"/>
            <div className = "details">
            
                <ul className = "info">
                    <li><img className = "location-emoji" src = "./photos/location.png" alt = "location emoji" /></li>
                    <li className = "location">{props.item.location}</li>
                    <li className = "google"><a href = {props.item.googleMapsUrl}>View on Google Maps</a></li>
                </ul>
                <h1 className = "main-header">{props.item.title}</h1>
                <h6 className = "date">{props.item.startDate} to {props.item.endDate}</h6>
                <p className = "description"> {props.item.description}</p>
                
            </div>
        </div>
    )
}