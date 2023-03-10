import React, { useState } from "react";
import DefaultResult from "./DefaultResult";
import ItemCard from "./ItemCard";

interface Props {
  data: any,
  status: string,
  query : string
}

const SearchResult:React.FC<Props> = ({data, status, query}) => {
  let show: boolean = false;

  if(status === "Clicked"){
    if(data.length !== 0){
      status = "";
      show = false;
    }else{
      status = 'No Content';
    }
  }

  if(status === 'No Content'){
    show = true;
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
        {show ? <div id="error-message">There are no results found!</div> : null }
    </div>
  )
}
  
export default SearchResult;