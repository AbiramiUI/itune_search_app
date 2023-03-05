import React, { useEffect } from "react";
import ItemCard from "./ItemCard";
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchData } from "../store/DataSlice";

const DefaultItems = () => {
  const defaultQuery = "BTS";
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.iTuneDataReducer.iTuneData);

  useEffect(() => {
    dispatch(fetchData(defaultQuery));
  },[]);
  
  return(
    <ItemCard data = {data}/>
  )
}

export default DefaultItems;