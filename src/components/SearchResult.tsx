import React from "react";
import { DefaultResult } from "./DefaultResult";
import { ItemCard } from "./ItemCard";
import styled from "styled-components";

type Props = {
  data: any,
  status: string,
  query : string
};

const Wrapper = styled.div`
  width: 1024px;
  margin: auto;
  padding: 30px 0px;
`;

export const SearchResult:React.FC<Props> = ({data, status, query}) => {
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
    <Wrapper className="search-wrapper">
      {status.length ?
        (<><DefaultResult /> <p style={{display: "none"}}>BTS</p></>) :
        (<div className="result-wrapper">
          <p className="result-title">Search Results for "<span>{query}</span>"</p>
          <ItemCard data = {data}/>
          <p style={{display: "none"}}>{query}</p>
        </div>)
        }
        {show ? <div id="error-message">There are no results found!</div> : null }
    </Wrapper>
  )
}