import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards";
import Title from "./components/Title";
import styled from "styled-components";

const Head = styled.h1`
  color: brown;
  font-family: Andale Mono;
`;

const App = () => {
  const [starWarsData, setStartWarsData] = useState([]);

  const effectFn = () => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        console.log("Success", response);
        setStartWarsData(response.data.results);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(effectFn, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // const starwars = starWarsData;
  return (
    <div className="App">
      <Title />
      <Head className="Header">Characters</Head>

      <Cards data={starWarsData} />
    </div>
  );
};

export default App;
