import SearchItem from "./SearchItem"

export default function SerchResults({pics}){
  const SearchResults=pics.map((pic) => (
    <SearchItem item = {pic} key={pic.id} />
  ));

  return (
    <div>
      {SearchResults}
    </div>
  )
}