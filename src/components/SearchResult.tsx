import React, { Component, useRef } from "react";
import DefaultItems from "./DefaultItems";
import ItemCard from "./ItemCard";
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../store/store";
import { handleChange } from "../store/SearchSlice";

interface Props {
  data: any,
  status: string,
  query : string
}

const SearchResult:React.FC<Props> = ({data, status, query}) => {
  if(status == 'No Content'){
    alert("There are no results found");
  }
    return(
      <div className="search-wrapper">
        
        {status.length ?
          <DefaultItems /> :
          <div className="search-wrapper">
            <p className="result-title">Search Result for "<span>{query}</span>"</p>
            <ItemCard data = {data}/>
          </div>
          }
      </div>
    )
  }
  
  export default SearchResult;