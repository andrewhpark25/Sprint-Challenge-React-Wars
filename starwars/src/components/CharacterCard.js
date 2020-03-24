import React from "react";
import styled from "styled-components";


const Card = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
width:300px;
border: 5px solid black;
margin:20px auto;
background-color:white;
`;

const Row = styled.div`
flex: 1 1 25%; 
`


const CharacterCard = props => {
  
    return (
        <Card>
            <Row>
        <h2>{props.character.name}</h2>
        <p>Height: {props.character.height}</p>
        <p>Weight: {props.character.mass}</p>
        <p>Hair Color: {props.character.hair_color}</p>
        <p>Skin Color: {props.character.skin_color}</p>
        <p>Eye Color: {props.character.eye_color}</p>
        <p>Born: {props.character.birth_year}</p>
        <p>Gender: {props.character.gender}</p>
        </Row>
      </Card>
    );
  };
  
  export default CharacterCard;
