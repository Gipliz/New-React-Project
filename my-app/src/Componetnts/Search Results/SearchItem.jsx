export default function SearchItem({item}){
    console.log(item)
    return(
        <div>
            <img src ={item.urls.small} alt = {item.alt_description}/>        
            <p> {item.alt_description} </p>
        </div>
    )
}