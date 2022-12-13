import React, { useState } from "react";

// create ACCESS key and "hide" it in ../access_key.js (add to .gitignore)
//import { ACCESS } from '../access_key';


export default function SearchBar({ setPics }) {
    const [query, setQuery] = useState("");
    
    const searchPhotosFetch = async () => {
        //console.log(query)

        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=9mtw7i8yYZCtaJ-c7c6kU_B0RWVghqOsyc2_2pN0HLo`
        );
        const dataJson = await data.json();
        const result = dataJson.results;
        //console.log(result);
        setPics(result);
    }

   
    return (
        <div>
            <input
                type="text"
                name="query"
                className="input"
                placeholder={"Suchbegriff z.B. 'Marihuana' ..."}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <br/>
            <input type="button" className="button" value="Suche Starten" onClick={() => searchPhotosFetch()} />
        </div>
    );
}