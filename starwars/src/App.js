import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  const [starWarsData, setStartWarsData] = useState([]);

  const effectFn = () => {
    axios
      .get("https://swapi.py4e.com/api/people/1")
      .then((response) => {
        console.log("Success", response);
        setStartWarsData(response.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(effectFn, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character character={starWarsData} />
    </div>
  );
};

export default App;
