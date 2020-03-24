
import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { Container } from "reactstrap";



// import data 



export default function CharacterList() {
 
    const [characters, setCharacters] = useState([]);
 

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results);
          })
          .catch(error => {
            console.log("the data was not returned", error);
          });
      }, []);

       
  return (
    <Container>
      {characters.map((character, index) => (
      <CharacterCard character={character} key={index} />
      ))}
 
  </Container>
  );
};


