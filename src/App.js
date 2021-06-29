import React, { useState } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Sentence";
import Create from "./components/Create";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 5rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 25px 0 25px 0px;
  outline: 0;
  transition: 0.2s;
  &:hover {
    background: lightgreen;
    cursor: pointer;
  }
`;


function App() {
  const [data, setData] = useState({})
  const [load, setLoad] = useState(false)
  const getData = async () => {
    const result = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const sentence = await result.json();
    setData(sentence[0]);
    setLoad(true)
  };
  return (
    <Container>
      {load ? <Frase data={data}/> : <Create /> }
      <Button onClick={getData}>Breaking Bad</Button>
              
    </Container>
  );
}

export default App;
