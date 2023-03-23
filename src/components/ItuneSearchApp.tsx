import React, { useRef, KeyboardEvent, useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { SearchResult } from "./SearchResult";
import { useAppDispatch, useAppSelector } from "../store/store";
import { handleChange } from "../store/QuerySlice";
import { fetchData } from "../features/services/DataSlice";
import { display } from "@mui/system";

export const ItuneSearchApp = () => {

  const query = useRef<string>("");
  const [status, setStaus] = useState("init");
  const data = useAppSelector((state) => state.iTuneDataReducer.iTuneData);
  const dispatch = useAppDispatch();

  const handleSearchClick = () => {
    dispatch(handleChange({query: query.current}));
    dispatch(fetchData(query.current));
    setTimeout(() => {
      setStaus("Clicked");
    },500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    setStaus("loading");
    if(e.key === 'Enter'){
      e.preventDefault();
      query.current = (e.target as HTMLInputElement).value;
      handleSearchClick();
    }
  }

  return(
    <div className="itune-wrapper">
      <header>
        <img src={require("../assets/images/logo.jpg")} className="next-logo" alt="logo" />
        <Paper
          component="form" className="search-tunes"
        >
          <InputBase id="search-input" 
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search artist, album or song"
            inputProps={{ 'aria-label': 'Search artist, album or song' }}
            onKeyDown={handleKeyPress}
            onChange={e => query.current = e.target.value}
            autoComplete = "off"
            data-testid="search-input"
          />
          <IconButton 
            id="search-button" 
            type="button" 
            sx={{ p: '10px' }} 
            aria-label="search" 
            onClick={handleSearchClick}
            data-testid="search-button"
          >
            <SearchIcon />
          </IconButton>
        </Paper >
        <MusicNoteIcon />
      </header>
      <SearchResult data={data} status={status} query={query.current}/>
    </div>
  )
  
}