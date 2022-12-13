export default function SearchItem({item}){
    console.log(item)
    return(
        <div className="foto">
            <img src ={item.urls.small} alt = {item.alt_description}/>        
            <p> </p>
        </div>

        
    )
}