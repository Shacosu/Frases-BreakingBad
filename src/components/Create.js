import React from 'react';
import styled from "@emotion/styled";


const TextPrincipal = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: .5rem;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid black;
`

const TextP = styled.p`
    font-size: 20px;
    text-align: right;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 5px;
    font-weight: bold;
`

const TextA = styled.a`
    font-style: italic;
    color: #000;
`
const Create = () => {
    return ( 
        <TextPrincipal>
            <h1>Haz Click para obtener una frase!</h1>
            <TextP>Pagina creada por <TextA href="https://www.linkedin.com/in/pablo-espinoza-126ab11a3/" target="_blank">Shacosu</TextA></TextP>
        </TextPrincipal>
     );
}   
 
export default Create;