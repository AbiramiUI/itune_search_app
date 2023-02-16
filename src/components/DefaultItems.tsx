import React, { Component } from "react";
import ItemCard from "./ItemCard";
import { useState } from 'react';

const DefaultItems = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("BTS");
  
  const getInitialData = () => {
    fetch(`https://itunes.apple.com/search?term=${query.split(' ').join('+')}`)
    .then(response => response.json()).then(responsejson => {
      setData(responsejson.results);
    }).catch(e => {
      console.log(e);
    })
  }
  getInitialData();

  return(
    <ItemCard data = {data}/>
  )
  }
  export default DefaultItems;