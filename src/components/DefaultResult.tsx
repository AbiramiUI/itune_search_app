import React, { useEffect } from "react";
import { ItemCard } from "./ItemCard";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchData } from "../features/services/DataSlice";

export const DefaultResult = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.iTuneDataReducer.iTuneData);

  useEffect(() => {
    dispatch(fetchData("BTS"));
  },[]);
  
  return(
    <ItemCard data = {data}/>
  )
}