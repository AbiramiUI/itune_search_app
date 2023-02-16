import React, { useRef, Component } from "react";
import { KeyboardEvent } from 'react';
import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SearchResult from "./SearchResult";
import { useAppDispatch, useAppSelector } from "../store/store";
import { handleChange } from "../store/SearchSlice";
/* eslint-disable */

const ItuneSearchApp = () => {

  const query = useRef<string>("");
  const [status, setStaus] = useState("init");
  const [data, setData] = useState([]);
  const dispatch = useAppDispatch();
  const itune = useAppSelector(state=>state.SearchTunes.SearchTunes);
  let queryMap;

  const handleSearchClick = () =>{
    dispatch(handleChange({query: query.current}));
    fetch(`https://itunes.apple.com/search?term=${(query.current).split(' ').join('+')}`)
    .then(response => response.json()).then(responsejson => {
      setData(responsejson.results)
      console.log(responsejson.resultCount);
      setStaus(responsejson.resultCount ? '' : 'No Content');
    }).catch(e => {
      console.log(e);
    })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    setStaus("loading");
      if(e.keyCode === 13){
        e.preventDefault();
      }
  }

    return(
      <div className="itune-wrapper">
        <header>
            <img src={logo} className="next-logo" alt="logo" />
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
                />
                <IconButton id="search-button" type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearchClick}>
                  <SearchIcon />
                </IconButton>
              </Paper >
              <MusicNoteIcon />
        </header>
        <SearchResult data={data} status={status} query={query.current}/>
      </div>
    )
    
  }
  
  export default ItuneSearchApp;