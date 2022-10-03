import { useEffect, useState } from "react";
//import { useReducer } from "react";

const Sightings = () => {
    const [sightings, setSightings] = useState([]);
  
    //get individuals data table
    const getSightings = async () => {
      const response = await fetch(`http://localhost:8081/species`);
      const data = await response.json();
      console.log(data);
      setSightings(data);
    };
    useEffect(() => {
      getSightings();
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
        <h1>Hello World 2</h1>
      </div>
    );
  };
    
  
  export default Sightings;
  