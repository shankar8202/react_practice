import React, { useEffect, useState } from "react";
import FetchItem from "./fetch2";
import axios from "axios"
import styled from 'styled-components';
const MainDiv=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between
`


function FetchApi() {
  const [user, setUser] = useState([]);

  // const fetchData = () => {
  //   return fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setUser(data));
  // };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setUser(response.data);
    });
  }, []);

  // useEffect(() => {
  //   fetchData();
  // },[]);
  return (
    <MainDiv>
      {user.map((data, index) => {
        return <FetchItem key={data.id} item={data} />;
      })}
    </MainDiv>
  );
}
export default FetchApi;