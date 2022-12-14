import React from "react";
import "./SearchItem.css"
export default function SearchItem({ item }){
    console.log(item)
    return(
        <div className="foto">
            <img className="imgs" src ={item.urls.small} alt = {item.alt_description}/>        
            <p> </p>
        </div>

        
    )
}