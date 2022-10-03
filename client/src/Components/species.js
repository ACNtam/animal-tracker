import { useEffect, useState } from "react";
import { useReducer } from "react";

const Species = () => {
  const [species, setSpecies] = useState([]);

  //get individuals data table
  const getSpecies = async () => {
    const response = await fetch(`http://localhost:8081/species`);
    const data = await response.json();
    console.log(data);
    setSpecies(data);
  };
  useEffect(() => {
    getSpecies();
  }, []);

  //initialistate of the form will be empty
  const initialState = {
    id: "",
    nick_name: "",
    species_id: "",
    seen_on: "",
  };

  return (
    <div>
      <h1>Hello World 3</h1>
    </div>
  );
};

export default Species;













