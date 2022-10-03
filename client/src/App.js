//import logo from './logo.svg';
import './App.css';
import Species from "./Components/species.js";
import Individuals from "./Components/individuals.js"
import Sightings from './Components/sightings.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/layout';

function App() {

  return (
    <BrowserRouter className="App">
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route path='/species' element={<Species />} />
          <Route path='/sightings' element={<Sightings />} />
          <Route index element={<Individuals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;














