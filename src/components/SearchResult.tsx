import React from "react";
import DefaultResult from "./DefaultResult";
import ItemCard from "./ItemCard";

interface Props {
  data: any,
  status: string,
  query : string
}

const SearchResult:React.FC<Props> = ({data, status, query}) => {

  if(status === "Clicked"){
    if(data.length !== 0){
      status = "";
    }else{
      status = 'No Content';
    }
  }
  if(status === 'No Content'){
    alert("There are no results found");
  }
  
  return(
    <div className="search-wrapper">
      {status.length ?
        (<DefaultResult />) :
        (<div className="result-wrapper">
          <p className="result-title">Search Result for "<span>{query}</span>"</p>
          <ItemCard data = {data}/>
        </div>)
        }
    </div>
  )
}
  
export default SearchResult;