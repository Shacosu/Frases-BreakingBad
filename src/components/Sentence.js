import React from 'react';
import styled from "@emotion/styled";

const SentenceContainer = styled.div`
    border: 2px solid black;
    width: 50%;
    border-radius: .5rem;
    
    background-color: #fff;
    padding: 20px;

    @media (min-widht: 992px) {
        margin-top: 10rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 5rem;
            color: black;
        }
    }
    p {
        font-size: 20px;
        text-align: right;
        margin-top: 5px;
    }
`

const Sentence = ({ data }) => {
    const { quote, author } = data;
    return (
        <SentenceContainer>
            <h1>Frase: {quote}</h1>
            <p>- Autor: {author}</p>
        </SentenceContainer> 
     );
}
 
export default Sentence;